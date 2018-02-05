import React from 'react';

const PlayerPreview = (props) => {
    return (
        <div>
            <div className='column'>
                <img className='avatar'
                src={props.avatar}
                />
                <h2 className='username'>@{props.username}</h2>
                {props.onReset?
                    <button className='reset' onClick={props.onReset.bind(null,props.id)}>reset</button>
                    :
                    null
                }
                {props.children}
            </div>
        </div>
    );
};

export default PlayerPreview;