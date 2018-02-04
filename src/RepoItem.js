import React from 'react';

const RepoItem = (props) => {
    return (
        <li className="popular-item">
            <div>
                <img className="avatar" src={props.repo.owner.avatar_url}/>
                <p>{props.repo.name}</p>
            </div> 
        </li>
    );
};

export default RepoItem;