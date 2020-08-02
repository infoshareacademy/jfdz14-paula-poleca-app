import React, { Component } from 'react';
import '../styles/Events.css';
import "../styles/MovieCard.css";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import EventModal from './Modal.js'


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
                    <CardDeck key={event.id}>
                    <Card className="text-center" style={{ width: '16rem' }}>
                        {/* {
                         event.attachments[0] !== undefined ?
                         <Card.Img variant="top" src={event.attachments[0].fileName} alt="imgEvent" />
                        : null
                        }    */}
                        <Card.Body>
                            <Card.Title>{event.name}</Card.Title>
                            <p className="addFavourite" 
                                onClick={() => this.props.addFavourite(event.id)}>Ulubione  
                                <span className={event.favourite ? "starColorActive" : "starColor"}>
                                <i className="fa fa-heart fa-lg"></i>
                                </span>
                            </p>
                            <Card.Text>
                                {event.place.name}
                            </Card.Text>    
                            <Card.Text>
                                {event.startDate.slice(0, 10)}
                            </Card.Text>    

                        </Card.Body>
                        <Card.Footer>
                            <EventModal event={event} />
                        </Card.Footer>
                    </Card>
                    </CardDeck>   
                    );
                })
            }
            </div>
            </>
        );
    }
}
 
export default Favourites;