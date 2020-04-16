import React, {Component} from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
            type: 'all',
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        };
    }

    componentDidMount() {
        let rooms = this.formatData(items);
        console.log(rooms);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({
            rooms: rooms,
            featuredRooms: featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        let room = tempRooms.find(room => room.slug === slug);
        return room;
    };

    handleChange = (event) => {
        // because we have dropdowns and checkbox inputs  we want to check the type;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        console.log(`this is value: ${value}, this is name: ${name}`);
        this.setState({
            [name]: value
        }, this.filterRooms)
    };

    filterRooms = () => {
        let {rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = this.state;
        let tempRooms = [...rooms];

        // filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        // filter by capacity
        if (capacity !== 1) {
            // transform values as initially is a number but once selecting from the dropdown is becoming string so needs to be parsed
            capacity = parseInt(capacity);
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        // filter by price
        // transform values as initially is a number but once selecting the range is becoming string so needs to be parsed
        price = parseInt(price);
        tempRooms = tempRooms.filter(room => room.price <= price);

        console.log('temp~Rooms:', tempRooms);

        // filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        // filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        // change state
        this.setState({
            sortedRooms: tempRooms,
        })
    };

    render() {
        return (
            <>
                <RoomContext.Provider value={
                    {
                        ...this.state,
                        getRoom: this.getRoom,
                        handleChange: this.handleChange
                    }
                }>
                    {this.props.children}
                </RoomContext.Provider>
            </>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
export {RoomProvider, RoomConsumer, RoomContext};
