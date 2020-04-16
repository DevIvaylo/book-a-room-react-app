import React from 'react';
import Header from "./shared/Header";
import Banner from "./shared/Banner";
import {Link} from "react-router-dom";
import RoomsContainer from "./RoomsContainer";

const Rooms = () => {
    return (
        <>
            <Header header='roomsHeader'>
                <Banner title='our rooms'>
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Header>
            <RoomsContainer/>
        </>
    )
};

export default Rooms;
