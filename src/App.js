import React from 'react';
import './App.css';
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import Error from "./components/Error";

function App() {
    return (
        <>
            <Home/>
            <Rooms/>
            <SingleRoom/>
            <Error/>
        </>
    );
}

export default App;
