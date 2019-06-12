import React from 'react';
import './FriendForm.scss';

const FriendForm = (props) => {
    return(
        <div className='friend-form'>
            <form>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='age' placeholder='Age'/>
                <input type='text' name='email' placeholder='Email'/>
                <button>Add Friend!</button>
            </form>
        </div>
    )
}

export default FriendForm;