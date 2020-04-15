import React from 'react';
import Header from "./shared/Header";
import Banner from "./shared/Banner";
import {Link} from "react-router-dom";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";

const Home = () => {
    return (
        <>
            <Header>
                <Banner title='luxurious rooms' subtitle='deluxe rooms starting at £299'>
                    <Link to='/rooms' className='btn-primary'>our rooms</Link>
                </Banner>
            </Header>
            <Services/>
            <FeaturedRooms/>
        </>
    )
};

export default Home;


