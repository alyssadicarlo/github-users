function UserCard(props) {

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header_avatar">
                    <img src={props.user.avatar_url} alt={props.user.name}/>
                </div>
            </div>
            <div className="card-content">
                <div className="card-content_username">
                    {props.user.name}
                </div>
                <div className="card-content_bio">
                    {props.user.bio}
                </div>
            </div>
            <div className="card-footer">
                <div className="card-footer_repos">
                    <span>{props.user.public_repos}</span>
                    <div className="label">Repos</div>
                </div>
                <div className="card-footer_followers">
                    <span>{props.user.followers}</span>
                    <div className="label">Followers</div>
                </div>
                <div className="card-footer_following">
                    <span>{props.user.following}</span>
                    <div className="label">Following</div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;