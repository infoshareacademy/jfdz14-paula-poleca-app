import React, { Component } from 'react';
import '../styles/Events.css';
import "../styles/MovieCard.css";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import EventModal from './Modal.js'
import gdansk from './gdansk1.jpg'



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
                    <CardDeck>
                    <Card key={event.id} className="text-center" style={{ width: '14rem' }}>
                    {
                         event.attachments[0] !== undefined 
                        ? <Card.Img variant="top" src={event.attachments[0].fileName} alt="imgEvent" style={{height:"150px"}} />
                        : <Card.Img variant="top" src={gdansk} alt="imgEvent" style={{height:"150px"}} />
                        }   
                        <Card.Body key={event.id}>
                        <Card.Title>{event.name}</Card.Title>
                            <p className="addFavourite" 
                                onClick={() => this.props.addFavourite(event.id)}>Ulubione  
                                <span className={event.favourite ? "starColorActive" : "starColor"}>
                                <i className="fa fa-heart fa-lg"></i>
                                </span>
                            </p>

                        <Card.Text>
                            <div>{event.place.name}</div>
                            <div>{event.startDate.slice(0, 10)}</div>
                            {/* <div>{event.descShort} </div> */}

                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        {/* <small className="text-muted"><a href={event.urls.www} target="_blank">Zobacz link</a> */}
                        <EventModal event={event} />
                    {/* </small> */}
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