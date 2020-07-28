import React from 'react'
import '../styles/Events.css';
import "./MovieCard.css";
import Finder from './Finders/Finder';
import CityFinder from './Finders/CityFinder'

class Events extends React.Component {
    
    state = {
        filter: '',
    }

    handleOnFormChange = (textFilter) => {
        this.setState({
            filter: textFilter
        })
    }

    addFavourite = (id) => {
        console.log('addFavourite ', id);
        this.props.addFavourite(id);
    }

    cityChange = (cityFilter) => {
        this.setState({
            filter: cityFilter
        })
    }

    render() {
        return (
        <>
            <div style = {{display: 'flex'}}>
                <Finder 
                    onFormChange={this.handleOnFormChange}
                    filterValue = {this.state.filter}
                    />

                <CityFinder 
                    onFormChange={this.cityChange} 
                />
            </div>
        <h2>Events</h2>

        <div className="cardsContainer">
            {
            this.props.events
            .filter((event) => {
                return event.place.name.toLocaleLowerCase()
                .includes(this.state.filter.toLocaleLowerCase()) || 
                event.name.toLocaleLowerCase()
                .includes(this.state.filter.toLocaleLowerCase()) ||
                event.descShort.toLocaleLowerCase()
                .includes(this.state.filter.toLocaleLowerCase())
            })            
            .map((event) => {

                return (
                    <div key={event.id} className="movie-card card">
                        <h5>{event.name}</h5>
                        <p className="movie-card-description">
                            {event.place.name}
                        </p>                                
                        <p className="addFavourite" 
                            onClick={() => this.addFavourite(event.id)}>Dodaj do ulubionych   
                            <span className={event.favourite ? "starColorActive" : "starColor"}>
                                <i className="fa fa-star fa-lg"></i>
                            </span>
                        </p>
                            {event.attachments[0] !== undefined ? <img src={event.attachments[0].fileName} alt=""/> : null }
                        <p className="descLong">
                            {event.descShort} 
                        </p>
                        {/* <p className="descLong">
                            {event.descLong} 
                        </p> */}
                        <p>
                            <a href={event.urls.www} target="_blank">Zobacz link</a>
                        </p>
                    </div>
                );
            })
        }
        </div>
        </>
        ); 
    }
}
export default Events