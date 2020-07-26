import React from 'react'
import '../styles/Events.css';
import "../styles/MovieCard.css";
import Finder from './Finders/Finder';

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
        this.props.addFavourite(id);
    }

    render() {
        return (
        <>

        <Finder 
            onFormChange={this.handleOnFormChange}
            filterValue = {this.state.filter}
            />

        <h2>Eventy</h2>

        <div className="cardsContainer">
            {
            this.props.events
            .filter((event) => {
                return event.place.name.toLocaleLowerCase()
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
                        {/* <p className="descLong">
                            {event.descShort} 
                        </p> */}
                        {/* <p className="descLong">
                            {event.descLong} 
                        </p> */}
                        {/* <p>
                            <a href={event.urls.www} target="_blank">Zobacz link</a>
                        </p> */}
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