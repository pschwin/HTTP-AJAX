import React from "react";
import Friend from './Friends.js';

const FriendsList = props => {

    return(
        <div className="friends-list">
        
        {props.friendsData.map((friend, i) =>{
            return(
                <div className='friend-container' key={i}>
                <h1>--------</h1>
                <Friend aFriend={friend} />
                </div>
            )
        })}
        
        </div>
    )
  
};

export default FriendsList;
