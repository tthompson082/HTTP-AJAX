import React from 'react';
import './Friend.scss';

const Friend = (props) => {
    return(
        <div className='friend'>
            <h2 className='name'>{props.friendProp.name}</h2>
            <h3 className='age'>{props.friendProp.age}</h3>
            <h3 className='email'>{props.friendProp.email}</h3>
        </div>
    )
}

export default Friend;