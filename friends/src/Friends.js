import React from 'react';

const Friend = props => {
    return(
        <div className='friend'>
        <h3>{props.aFriend.name}</h3>
        <h3>{props.aFriend.age}</h3>
        <h3>{props.aFriend.email}</h3>
        </div>
    )
}

export default Friend;