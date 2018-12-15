import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';

const route=(
    <Switch>
        <Route path='/' component={Auth}exact/>
        <Route path='/dashboard' component={Dashboard}exact/>
        <Route path= '/post/:postid' component={Post}exact/>
        <Route path='/new' component={Form}exact/>
    </Switch>



)

export default route;