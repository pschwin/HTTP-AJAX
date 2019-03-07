import React from "react";
// import Friend from './Friends.js';
// import FriendForm from './FriendForm.js';

const FriendsList = props => {

    return(
        <div className="friends-list">
        
        {props.friendsData.map((friend, i) =>{
            return(
                <div className='friend-container' key={i}>
                <h1>--------</h1>
                <h3>{friend.name}</h3>
                <h3>{friend.age}</h3>
                <h3>{friend.email}</h3>
                {/* <Friend aFriend={friend} /> */}
                
                </div>
            )
        })}
        
        </div>
    )
  
};

export default FriendsList;
