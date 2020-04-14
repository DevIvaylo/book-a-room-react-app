import React from 'react';
import Header from "./Header";
import Banner from "./Banner";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <>
            <Header>
                <Banner title='404' subtitle='page not found'>
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Header>
        </>
    )
};

export default Error;
