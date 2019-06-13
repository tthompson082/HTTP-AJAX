import React from 'react';
import {Link} from 'react-router-dom';

import './Friend.scss';

const Friend = (props) => {
    return(
        <div className='friend'>
            <div className='name'>
                <h2>{props.friendProp.name}</h2>
                <div className="buttons">
                    <Link to={`/update/${props.friendProp.id}`}>
                        <button className='update'>Update</button>
                    </Link>
                </div>
            </div>
            <div className='info'>
                <h3 className='age'>{props.friendProp.age}</h3>
                <h3 className='email'>{props.friendProp.email}</h3>
            </div>
        </div>
    )
}

export default Friend;