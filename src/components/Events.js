import React from 'react'
import '../styles/Events.css';
import "../styles/MovieCard.css";
import Finder from './Finders/Finder';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup'

class Events extends React.Component {
    
    state = {
        filter: '',
        more: 20,
    }

    handleOnFormChange = (textFilter) => {
        this.setState({
            filter: textFilter
        })
    }

    addFavourite = (id) => {
        this.props.addFavourite(id);
    }

    showMore = () => {
        let eventslength = this.props.events.length;
        let maxLoad = this.state.more + 20;
        if(maxLoad < eventslength) {
            this.setState({
                more: maxLoad,
            });            
        } else {
            while(maxLoad > eventslength ) {
                maxLoad = maxLoad - 1;
            }
            this.setState({
                more: maxLoad,
            });   
        }
    }

    render() {

        const events = this.props.events.slice(0,this.state.more);

        return (
        <>

        <Finder 
            onFormChange={this.handleOnFormChange}
            filterValue = {this.state.filter}
            />

        <h2>Eventy</h2>

        {
        this.props.loading && 
        <div>
            <p style={{fontSize: '30px', textAlign: 'center'}}><Spinner animation="border" /> LOADING...</p>
        </div>
        }

        <div className="cardsContainer">
            {

            events
            .filter((event) => {
                return event.place.name.toLocaleLowerCase()
                .includes(this.state.filter.toLocaleLowerCase())
            })            
            .map((event) => {

                return (
                    // <div key={event.id} className="movie-card card">
                    //     <h5>{event.name}</h5>
                    //     <p className="movie-card-description">
                    //         {event.place.name}
                    //     </p>                                
                    //     <p className="addFavourite" 
                    //         onClick={() => this.addFavourite(event.id)}>Dodaj do ulubionych   
                    //         <span className={event.favourite ? "starColorActive" : "starColor"}>
                    //             <i className="fa fa-heart fa-lg"></i>
                    //         </span>
                    //     </p>
                    //         {event.attachments[0] !== undefined ? <img src={event.attachments[0].fileName} alt=""/> : null }
                    //     <p className="descLong">
                    //         {event.descShort} 
                    //     </p>
                    //     {/* <p className="descLong">
                    //         {event.descLong} 
                    //     </p> */}
                    //     <p>
                    //         <a href={event.urls.www} target="_blank">Zobacz link</a>
                    //     </p>
                    // </div>

                <CardDeck>
                <Card>
                <Card.Img variant="top" src={event.attachments[0] !== undefined ? <img src={event.attachments[0].fileName} alt=""/> : null }/>
                    <Card.Body key={event.id} >
                    <Card.Title>{event.name}</Card.Title>
                        <p className="addFavourite" 
                            onClick={() => this.addFavourite(event.id)}>Ulubione  
                            <span className={event.favourite ? "starColorActive" : "starColor"}>
                            <i className="fa fa-heart fa-lg"></i>
                            </span>
                        </p>

                    <Card.Text>
                        <div>{event.place.name}</div>
                        <div>{event.descShort} </div>

                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href={event.urls.www} target="_blank">Zobacz link</a>
                </small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={event.attachments[0] !== undefined ? <img src={event.attachments[0].fileName} alt=""/> : null }/>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
                );
            })
        }
        </div>
        {this.state.more < this.props.events.length &&
        <div className="containerMore">
        <button className="buttonMore" onClick={this.showMore}>Show more...</button>    
        </div>
        }
        </>
        ); 
    }
}
export default Events
