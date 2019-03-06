import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendsList from './FriendsList.js';


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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>These are my Friends:</h1>
          <FriendsList friendsData = {this.state.friends} />
        </header>
      </div>
    );
  }
}

export default App;
