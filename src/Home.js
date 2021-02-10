import React, { Component } from 'react'
import { auth } from './firebase'
export default class Home extends Component {
  constructor(props){
    super(props);
    
    this.handleSignOut=this.handleSignOut.bind(this)
    
  }

  handleSignOut=event=>{
    
    auth.signOut().then(()=>{
      console.log("sign out ")
      this.props.history.push('/')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
   
  render() {
    return (
    <div>
      <h1>hello home page 🚀</h1>
      <button onClick={(event) => this.handleSignOut(event)}className="signOut">Sign Out</button>
    </div>
    );
  }
}
