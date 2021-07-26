import { Link } from 'react-router-dom';
import UserCard from './UserCard';

function UserCardList(props) {

    return (
        <>
            {props.users.map(user => {
                return (
                    <>
                        <Link to={`/user/${user.login}`}>
                            <UserCard key={user.id} user={user} />
                        </Link>
                    </>
                );
            })}
        </>
    );
}

export default UserCardList;