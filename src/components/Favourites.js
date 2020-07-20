import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <>
            <h2>Favourites</h2>
            <ListGroup>
                {
                this.props.events
                .map((event) => {
                    console.log(event.favourite);
                    // console.log('-----------------------');
                    return (
                    event.favourite &&
                    <ListGroup.Item key = {event.id}>
                        
                        <div className="movie-card">
                            <div className="movie-card card">
                                <h5>{event.name}</h5>
                                <p 
                                    className="movie-card-description" style={{ fontSize: "14px" }}>
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

                    </ListGroup.Item>                            
                    );
                })
            }
            </ListGroup>
            </>
        );
    }
}
 
export default Favourites;