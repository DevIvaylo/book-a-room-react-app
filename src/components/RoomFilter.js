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

    // getUnique people
    let people = getUnique(rooms, 'capacity');
    // map to jsx
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <>
            <section className='filter-container'>
                <Title title='search rooms'/>
                <form className='filter-form' action="">
                    {/*select room type*/}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id='type' value={type} className='form-control'
                                onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    {/*end room type*/}
                    {/*select guests*/}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select name="capacity" id='capacity' value={capacity} className='form-control'
                                onChange={handleChange}>
                            {people}
                        </select>
                    </div>
                    {/*end guests*/}
                    {/*room price*/}
                    <div className="form-group">
                        <label htmlFor="price">room price £{price}</label>
                        <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price}
                               onChange={handleChange} className='form-control'/>
                    </div>

                    {/*end room price*/}
                    {/*size*/}
                    <div className="form-group">
                        <label htmlFor="room size">room size</label>
                        <div className="size-inputs">
                            <input type="number" name='minSize' id='size' value={minSize} onChange={handleChange}
                                   className='size-input'/>
                            <input type="number" name='maxSize' id='size' value={maxSize} onChange={handleChange}
                                   className='size-input'/>
                        </div>
                    </div>
                    {/*end size*/}
                    {/*extras*/}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name='breakfast' checked={breakfast} id='breakfast'
                                   onChange={handleChange}
                                   className='bre'/>
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name='pets' checked={pets} id='pets' onChange={handleChange}
                                   className='bre'/>
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                    {/*end of extras*/}
                </form>
            </section>

        </>
    )
};

export default RoomFilter;
