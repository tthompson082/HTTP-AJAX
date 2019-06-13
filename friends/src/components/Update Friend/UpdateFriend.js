import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './UpdateFriend.scss';

class UpdateFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friend: {
                name: 'name',
                age: 'age',
                email: 'email'
            }
        }
        console.log(this.state.friend.name)
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id)
    }

    fetchFriend = id => {
        axios
            .get(`http://localhost:5000/friends/${id}`)
            .then(res => {
                console.log(res)
                this.setState(() => ({friend: res.data}))
            })
            .catch(err => {console.error(err)})
    }

    putFriend = event => {
        event.preventDefault();
        this.props.updateFriend(this.state.friend)
    }

    handleChange = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value 
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Update</h1>
                <div className='update-form'>
                    <form onSubmit={this.putFriend}>
                        <input required type='text' name='name' placeholder='Name' onChange={this.handleChange} value={this.state.friend.name} />
                        <input required type='text' name='age' placeholder='Age' onChange={this.handleChange} value={this.state.friend.age} />
                        <input required type='text' name='email' placeholder='Email' onChange={this.handleChange} value={this.state.friend.email} />
                        <button>Update Friend!</button>
                    </form>
                    <button>Delete Friend!</button>
                </div>
                <Link to='/'>
                    <button className='home-button'>Home</button>
                </Link>
            </div>
        )
    }
}

export default UpdateFriend;