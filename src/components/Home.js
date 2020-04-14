import React from 'react';
import Header from "./Header";
import Banner from "./Banner";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header>
                <Banner title='luxurious rooms' subtitle='deluxe rooms starting at £299'>
                    <Link to='/rooms' className='btn-primary'>our rooms</Link>
                </Banner>
            </Header>
        </>
    )
};

export default Home;


