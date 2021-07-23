import UserCard from './UserCard';

function UserCardList(props) {

    const UserCardsJSX = props.users.map(user => {
        return <UserCard key={user.id} user={user} />
    }); 

    return (
        <>
            {UserCardsJSX}
        </>
    );
}

export default UserCardList;