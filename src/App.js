import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/home"  component={Home}/>     
                        
                        <Route path="/register"  component={SignUp}/>

                        <Route path="/"  component={Login} />
                    </Switch>
                    
                </div>
            </Router>
        )
    }
}
