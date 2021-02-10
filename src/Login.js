import React, { Component } from 'react'
import { auth } from './firebase';
import {history} from 'react-router-dom';


const requestLogin=()=>{
	
}
export default class Login extends Component {
    constructor(props){
			super(props);   // pass props to parent constructor 
			this.state={
					email:'',
					password:''
			}
        //this.handleSignIn=this.handleSignIn.bind(this)
    }

		handleSignIn=event=>{
			event.preventDefault();
			console.log("this is login page ")
			console.log(this.state.email)
			// dispatch(requestLogin());
			//auth.onAuthStateChanged
			
			//console.log(auth.currentUser);
			auth.signInWithEmailAndPassword(this.state.email, this.state.password)
				.then((auth)=>{
					console.log(auth);
					// dispatch(receiveLogin(auth));
					this.props.history.push('/home');			
				}).catch((error)=>{
					// dispatch(loginError());
					alert(error.message)
				})
			}
			
			
		handleSignUp=event=>{
			event.preventDefault();  //for avoid loss of data after refreshing 
			console.log("this is registration page")
        // history.push('/register');
        // const email=this.state.email
        // const password=this.state.password
        //console.log(this.state);
        //console.log(email + password);
			auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then((userCredential) => {
					// Signed in 
					console.log(userCredential.email);
					// ...
					// history.push({
					//     pathname:'/register',
					//     state:{detail:email}
					// })
			})
			.catch((error) => {
					alert(error.message)
					// ..
			});
    }
    
    render() {
			return (
			<div className="login">
				<div className="login__container">
					<h1 className="login__sign">Sign-in</h1>
					<form>
						<h5>E-mail</h5>
						<input type="email" value={this.state.email} onChange = {(event) => this.setState({email:event.target.value})}/>
						<h5>Password</h5>
						<input type="password" value={this.state.password} onChange={(event) => this.setState({password:event.target.value})}/>
						
						<button type="submit" onClick={(event)=>this.handleSignIn(event)} className="login__signInButton">Sign In</button>
					
					</form>
					<button onClick={(event) => this.handleSignUp(event)} className="login__registerButton">Create your Account</button>
				
				</div>
                
			</div>
			);
		}
	}   

/*
sahaniv66@gmail.com
*/