import React from 'react';

import './UserCard.css'

function UserCard(props) {
    // console.log("props", props)
    return (
        <div className="card">
            <img className="userImg" src={props.users.avatar_url} alt={props.users.login} />
            <p className="users-name">Username: <b>{props.users.login}</b></p>
            <p>Github: <a href={`${props.users.html_url}`}>{props.users.html_url}</a></p>
        </div>
    )
}

export default UserCard;
