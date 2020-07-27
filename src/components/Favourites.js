import React, { Component } from 'react';
import '../styles/Events.css';
import "../styles/MovieCard.css";

class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <>
            <h2>Ulubione</h2>
            <div className="cardsContainer">
                {
                this.props.events
                .map((event) => {
                    // console.log(event.favourite);

                    return (
                    event.favourite &&
                    <div key = {event.id}>
                        <div className="movie-card card">
                            <h5>{event.name}</h5>

                            <p className="addFavourite" 
                                onClick={() => this.props.addFavourite(event.id)}>Usuń z ulubionych   
                                <span className={event.favourite ? "starColorActive" : "starColor"}>
                                    <i className="fa fa-heart fa-lg"></i>
                                </span>
                            </p>

                            <p className="movie-card-description" style={{ fontSize: "14px" }}>
                                {event.place.name}
                            </p>
                                {event.attachments[0] !== undefined ? <img src={event.attachments[0].fileName} alt=""/> : null }
                            <p className="descLong">
                                {event.descShort} 
                            </p>
                            <p>
                                <a href={event.urls.www} target="_blank">Zobacz link</a>
                            </p>
                        </div>
                    </div>                            
                    );
                })
            }
            </div>
            </>
        );
    }
}
 
export default Favourites;