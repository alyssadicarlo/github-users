import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserCardList from './UserCardList';
import UserProfile from './UserProfile';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            users: []
        }
    }

    _handleChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.fetchUsers();
    }

    fetchUsers = async () => {
        const response = await fetch(
            `https://api.github.com/users/${this.state.username}`
        ).then(response => response.json());

        const newUserData = [...this.state.users, response];

        this.setState({
            users: newUserData
        });
    }

    render() {        
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <div>
                                Styling taken from <a href="https://codepen.io/andytran/pen/zrzvYQ">here</a>.
                            </div>
                            <form onSubmit={this._handleSubmit}>
                                <input type="text" onChange={this._handleChange} />
                                <label>{this.state.username}</label>
                                {/* <button type="submit">Submit</button> */}
                            </form>
                            {this.state.users.length > 0 ? <UserCardList users={this.state.users} /> : ''}
                        </Route>
                        <Route path="/user/:username">
                            <UserProfile users={this.state.users} />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default SearchForm;