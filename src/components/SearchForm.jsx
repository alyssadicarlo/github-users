import React from 'react';
import UserCardList from './UserCardList';

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
                <form onSubmit={this._handleSubmit}>
                    <input type="text" onChange={this._handleChange} />
                    <label>{this.state.username}</label>
                    {/* <button type="submit">Submit</button> */}
                </form>
                <UserCardList users={this.state.users} />
            </>
        );
    }
}

export default SearchForm;