import React from 'react';
import './Friend.scss';

const Friend = (props) => {
    return(
        <div className='friend'>
            <div className='name'>
                <h2>{props.friendProp.name}</h2>
            </div>
            <div className='info'>
                <h3 className='age'>{props.friendProp.age}</h3>
                <h3 className='email'>{props.friendProp.email}</h3>
            </div>
        </div>
    )
}

export default Friend;