import React from 'react';
import './App.css';
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import {Switch, Route} from 'react-router-dom'
import Error from "./components/Error";


function App() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/rooms/' component={Rooms}/>
            <Route exact path='/rooms/:id/' component={SingleRoom}/>
            <Route component={Error}/>
        </Switch>
    );
}

export default App;
