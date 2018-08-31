import React, { Component } from 'react';
import './App.css';
import Main from './component/main'
import User from './component/user'
class App extends Component {
  constructor(){
    super();
    this.state={
      username:"max"
    };
  }
  changeUsername(newName){
    this.setState({
      username:newName
    })
  }
  render() {
    return (
      <div className="container">
        <Main changeUsername={this.changeUsername.bind(this)}/>
        <User username={this.state.username}/>
      </div>
     
    );
  }
}

export default App;
