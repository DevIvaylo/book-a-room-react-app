import React from 'react';
import {useContext} from 'react';
import {RoomContext} from "../Context";
import Title from "./shared/Title";


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
};

const RoomFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    console.log('context RoomFilter', context);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;
    // getUnique types
    let types = getUnique(rooms, 'type');
    console.log('rooms RoomFilter', rooms);
    // add all
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <>
            <section className='filter-container'>
                <Title title='search rooms'/>
                <form className='filter-form' action="">
                    {/*select type*/}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id='type' value={type} className='form-control'
                                onChange={handleChange}>
                            {types}
                        </select>
                    </div>

                    {/*end type*/}
                </form>
            </section>

        </>
    )
};

export default RoomFilter;
