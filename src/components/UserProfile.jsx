import { useParams } from "react-router-dom";

const UserProfile = (props) => {
    const { username } = useParams();

    const targetUser = props.users.find(user => user.login === username);

    console.log("TARGET USER: ", targetUser);

    return (
        <article>
            <img width="150" src={targetUser.avatar_url} alt={targetUser.login} />
            <h1>{targetUser.name}</h1>
            <p>{targetUser.bio}</p>
        </article>
    );
}

export default UserProfile;