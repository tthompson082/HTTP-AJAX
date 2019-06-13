import React from 'react';
import './App.scss';
import axios from 'axios';
import { Route } from 'react-router-dom';

import FriendsList from './components/FriendsList/FriendsList';
import FriendForm from './components/FriendForm/FriendForm';
import UpdateFriend from './components/Update Friend/UpdateFriend';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      postFriendMessage: '',
      modal: false
    }
  }

  componentDidMount() {
    axios 
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res)
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err)
      })
  }

  postFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data,
          modal: false
        })
        // this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => { this.setState({friends: res.data})
      this.props.history.push('/')
      })
      .catch(err => console.log(err));
}

  deleteFriend = friend => {
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {this.setState({friends: res.data})
      this.props.history.push('/')
      })
      .catch(err => console.log(err))
}

  toggle = e => {
    this.setState(prevState => ({
        modal: !prevState.modal
    }))
  }

  render() {
    return(
      <div>
        <Route exact path='/' render={(props) => (
            <div className='body'>
              <h1>My Friends!</h1>
              <FriendsList {...props} friendsProp={this.state.friends} deleteFriend={this.deleteFriend} />
                <button onClick={this.toggle} className='add-friend-button'>Add A Friend!</button>
            </div>
        )} />
        <FriendForm postFriend={this.postFriend} modal={this.state.modal} toggle={this.toggle}/>
        <Route 
        path='/update/:id'
        render={props => (<UpdateFriend {...props} friends={this.state.friends} deleteFriend={this.deleteFriend} updateFriend={this.updateFriend} />)}
        />
      </div>
    )
  }
}

export default App;
