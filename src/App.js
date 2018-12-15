import React, { Component } from 'react';
import './App.css';
// import Dashboard from './component/Dashboard/Dashboard';
// import Auth from './component/Auth/Auth';
// import Form from './component/Form/Form';
// import Post from './component/Post/Post';
import Nav from './component/Nav/Nav';
import Route from '../src/Route'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Auth/> */}
      {/* <Dashboard/>
      <Form/>
      <Post/> */}
      {Route}
      <Nav/>
      </div>
    );
  }
}

export default App;
