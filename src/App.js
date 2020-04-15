import React from 'react';
import './App.css';
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import {Switch, Route} from 'react-router-dom'
import Error from "./components/Error";
import Navbar from "./components/shared/Navbar";


function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/rooms/' component={Rooms}/>
                <Route exact path='/rooms/:slug/' component={SingleRoom}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;
