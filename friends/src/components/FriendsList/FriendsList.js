import React from 'react';
import './FriendsList.scss';

import Friend from '../Friend/Friend';

const FriendsList = (props) => {
    console.log(props)
    return(
        <div className='friends-list'>
            {props.friendsProp.map(friend =>(
                <Friend
                    friendProp={friend}
                    key={friend.id}
                />
            ))}
        </div>
    )
}

export default FriendsList;