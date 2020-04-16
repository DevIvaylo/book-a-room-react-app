import React from 'react';
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import {RoomConsumer} from "../Context";
import Loading from "./shared/Loading";

const RoomsContainer = () => {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {loading, sortedRooms, rooms} = value;
                    if (loading) {
                        return <Loading/>;
                    }
                    console.log('value', value);
                    return (
                        <>
                            <h1> rooms container</h1>
                            <RoomFilter rooms={rooms}/>
                            <RoomList rooms={sortedRooms}/>
                        </>
                    )
                }
            }
        </RoomConsumer>
    )
};

export default RoomsContainer;
