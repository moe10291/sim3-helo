import React, { Component } from 'react';
import axios from 'axios';
import './Auth.css'


class Auth extends Component{
    constructor(props){
    super(props);
    this.state={
        username:"",
        password: ""
    }
}

    // ****** REGISTER ******
    async register(){
        let{username, password}= this.state
        let res= await axios.post('/helo/register', {username, password});
        this.setState({username:"", password: ""})
        if (res.data.loggedIn){
            this.props.history.push('/dashboard')
        }
    }

    // ****** LOGIN ******   

    async login() {
        let {username, password}= this.state
        let res= await axios.post ('/helo/login', {username, password});
        this.setState({username:"", password:""})
        if(res.data.loggedIn){
            this.props.history.push('/')    
    }
}




    handleUsername(text){
        this.setState({username: text})
    }


    handlePassword(text){
        this.setState({password: text})
    }

    
    render(){
        return(
            <div className='box'>
              <p>Username: 
                  <input className="username" onChange={(e)=> this.handleUsername(e.target.value)}/></p>
              <p>Password:
                 <input className="password" onChange={(e)=> this.handlePassword(e.target.value)}type="password"/></p> 


            <button onClick={()=> this.login()}> Login </button>
            <p></p>
            <button onClick={()=> this.register()}> Register </button>
            </div>
        )
    }
}

export default Auth;