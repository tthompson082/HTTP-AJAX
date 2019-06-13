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
      postFriendMessage: ''
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
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateFriend = friend => {
    axios
        .put(`http://localhost:5000/friends/${friend.id}`, friend)
        .then(res => this.setState({friends: res.data}))
        .catch(err => console.log(err));
}

deleteFriend = friend => {
  axios
    .delete(`http://localhost:5000/friends/${friend.id}`)
    .then(res => this.setState({friends: res.data}))
    .catch(err => console.log(err))
}

  render() {
    return(
      <div>
        <Route exact path='/' render={(props) => (
            <div>
              <h1>My Friends!</h1>
              <FriendsList {...props} friendsProp={this.state.friends} deleteFriend={this.deleteFriend} />
              <FriendForm {...props} postFriend={this.postFriend} />
            </div>
        )} />
        <Route 
        path='/update/:id'
        render={props => (<UpdateFriend {...props} friends={this.state.friends} deleteFriend={this.deleteFriend} updateFriend={this.updateFriend} />)}
        />
      </div>


    )
  }
}

export default App;
