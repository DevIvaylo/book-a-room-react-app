import React from 'react';
import Header from "./Header";
import Banner from "./Banner";
import {Link} from "react-router-dom";

const Rooms = () => {
    return (
        <>
            <Header header='roomsHeader'>
                <Banner title='our rooms'>
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Header>
        </>
    )
};

export default Rooms;
