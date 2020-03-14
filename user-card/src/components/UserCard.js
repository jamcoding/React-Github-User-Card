import React from 'react';

function UserCard(props) {
    console.log("props", props)
    return (
        <div>
            <img src={props.users.avatar_url} alt={props.users.id} />
            <p>{props.users.login}</p>
        </div>
    )
}

export default UserCard;
