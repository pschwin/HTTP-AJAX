import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendsList from './FriendsList.js';
import FriendForm from './FriendForm';


class App extends Component {

  constructor(){
    super();
    this.state = {
      friends: [],
      error: 'You did it wrong :('
    };
  }

  componentDidMount(){
    axios
      .get("http://localhost:5000/friends")
      .then(res =>{
        console.log(res);
        this.setState({friends: res.data});
      })
      .catch(err => {
        console.log(err);
        this.setState({error: err});
      });
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res =>{
        this.setState({
          friends: res.data
        });
        this.props.history.push('')
      })
      .catch(err =>{
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>These are my Friends:</h1>
          <FriendsList friendsData = {this.state.friends} />
          <FriendForm addFriend={this.addFriend} />
        </header>
      </div>
    );
  }
}

export default App;
