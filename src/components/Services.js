import React, {Component} from 'react';
import Title from "./shared/Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";


export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    icon: <FaCocktail/>,
                    title: 'Free cocktails',
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
                },
                {
                    icon: <FaHiking/>,
                    title: 'Endless hiking',
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
                },
                {
                    icon: <FaShuttleVan/>,
                    title: 'Free shuttle',
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
                },
                {
                    icon: <FaBeer/>,
                    title: 'Strongest beer',
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
                },
            ]
        };
    }

    render() {
        return (
            <>
                <section className='services'>
                    <Title title='services'/>
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                    </div>
                </section>
            </>
        );
    }
}
