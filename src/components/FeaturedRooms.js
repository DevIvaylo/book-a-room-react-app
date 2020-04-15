import React, {Component} from 'react';
import {RoomContext} from "../Context";
import Loading from "./shared/Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const {featuredRooms: rooms} = this.context;
        console.log(rooms);
        return (
            <>
                <h1>featured rooms</h1>
                <Loading/>
                <Room/>
            </>
        );
    }
}
