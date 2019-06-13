import React from 'react';
import './FriendForm.scss';
import { Link } from 'react-router-dom';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addFriend: {
                // id: Date.now(),
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = event => {
        this.setState({
            addFriend: {
                ...this.state.addFriend,
                [event.target.name]: event.target.value 
            }
        })
    }

    addFriend = event => {
        event.preventDefault();
        this.props.postFriend(this.state.addFriend)

        this.setState({
            addFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
        return(
            <div className='friend-form'>
                <form onSubmit={this.addFriend}>
                    <input required type='text' name='name' placeholder='Name' onChange={this.handleChange} value={this.state.addFriend.name} />
                    <input required type='text' name='age' placeholder='Age' onChange={this.handleChange} value={this.state.addFriend.age} />
                    <input required type='text' name='email' placeholder='Email' onChange={this.handleChange} value={this.state.addFriend.email} />
                    <button>Add Friend!</button>
                </form>
                <Link to='/'>
                    <button className='home-button'>Home</button>
                </Link>
            </div>
        )
    }
}

export default FriendForm;