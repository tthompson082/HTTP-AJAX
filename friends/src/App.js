import React from 'react';
import './App.scss';
import axios from 'axios';

import FriendsList from './components/FriendsList/FriendsList';
import FriendForm from './components/FriendForm/FriendForm';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
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

  render() {
    return(
      <div>
        <h1>My Friends!</h1>
        <FriendsList friendsProp={this.state.friends} />
        <FriendForm />
      </div>
    )
  }
}

export default App;
