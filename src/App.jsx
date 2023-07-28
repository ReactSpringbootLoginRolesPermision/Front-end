import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import Admin from './component/Admin'
import Manager from './component/Manager'
import Customer from './component/Customer';



function App() {




    return (
    <Switch>
        <Route exact path = "/">
            <Home></Home>
        </Route>
        <Route exact path = "/login">
            <Login></Login>
        </Route>
        <Route exact path = "/signup">
            <Signup></Signup>
        </Route>
        <Route exact path = "/admin">
            <Admin></Admin>
        </Route>
        <Route exact path = "/manager">
            <Manager></Manager>
        </Route>
        <Route exact path = "/customer">
            <Customer></Customer>
        </Route>
    </Switch>
    );
}

export default App;
