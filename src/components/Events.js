import React from 'react'
import '../styles/Events.css';
import "../styles/MovieCard.css";
import Finder from './Finders/Finder';
import CityFinder from './Finders/CityFinder'
import Spinner from 'react-bootstrap/Spinner';
import RangeSlider from './Finders/RangeSlider'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import EventModal from './Modal.js'
import gdansk from './gdansk1.jpg'
import firebase from 'firebase';

class Events extends React.Component {
    
    state = {
        filter: '',
        city: '',
        user: null,
    }

    addNumber = parseInt(this.state.add)

    handleOnFormChange = (textFilter) => {
        this.setState({
            filter: textFilter
        })
    }

    addFavourite = (id) => {
        console.log(id)
        this.props.addFavourite(id);
    }

    cityChange = (cityFilter) => {
        this.setState({
            city: cityFilter
        })
    }

    logFavourite = (evnt) => {
        evnt.target.textContent = 'Musisz być zalogowany';
    }    
    
    componentDidMount() {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user, unsubscribe,
            })
        });
    } 
    
    componentWillUnmount() {
        this.state.unsubscribe();
      }    

    render() {
       
        const events = this.props.events;
        let filteredEvents = null
        // const events = this.props.events.slice(0,this.state.more);

        return (
        <>
            <div className='findersBox'>
                <Finder 
                    onFormChange={this.handleOnFormChange}
                    filterValue = {this.state.filter}
                    />

                <CityFinder 
                    onFormChange={this.cityChange} 
                />
             
            </div>
      
        
         
        <h2>Nadchodzące wydarzenia</h2>


        {
        this.props.loading && <div style={{fontSize: '30px', textAlign: 'center'}}>
            <Spinner animation="border" /><div style={{display: 'inline', paddingLeft: '20px'}}>LOADING...</div>
        </div>
        }        

        <div className="cardsContainer">
            {

            events
            .filter((event) => {
                return event.place.name.toLowerCase()
                .includes(this.state.filter.toLowerCase()) || 
                event.name.toLocaleLowerCase()
                .includes(this.state.filter.toLowerCase()) 
                
                // event.descShort.toLowerCase()
                // .includes(this.state.filter.toLowerCase()) ||
                // event.startDate.includes(this.state.filter)
            })
            .filter((event) => {
                return event.place.name.toLowerCase()
                .includes(this.state.city.toLowerCase())
            })            
            .map((event) => {
                return (
                        <CardDeck key={event.id} style={{margin:"4px"}}>
                            {filteredEvents = true}
                        <Card className="text-center" style={{ width: '14rem' }}>
                        {
                        event.attachments && event.attachments[0] !== undefined 
                        ? <Card.Img variant="top" src={event.attachments[0].fileName} alt="imgEvent" style={{height:"150px"}} />
                        : <Card.Img variant="top" src={gdansk} alt="imgEvent" style={{height:"150px"}} />
                        }   
 
                        <Card.Body key={event.id}>
                            <Card.Title style={{ height: "50px", textTransform: "UPPERCASE", textAlign:"center"}}>{event.name}</Card.Title>
                                
                                {/* <p className="addFavourite" 
                                    onClick={() => this.addFavourite(event.id)}>Ulubione  
                                    <span className={event.favourite ? "starColorActive" : "starColor"}>
                                    <i className="fa fa-heart fa-lg"></i>
                                    </span>
                                </p> */}

                            {this.state.user 
                            ? (
                            <div>
                                <p className="addFavourite"
                                    onClick={() => this.addFavourite(event.id)}>Dodaj do ulubionych   
                                    <span className={event.favourite ? "starColorActive" : "starColor"}>
                                        <i className="fa fa-heart fa-lg"></i>
                                    </span>
                                </p>                            
                            </div>
                            )
                            : (
                            <div>
                                <p className="addFavourite"
                                    onClick={this.logFavourite}>Dodaj do ulubionych   
                                    <span className={event.favourite ? "starColorActive" : "starColor"}>
                                        <i className="fa fa-heart fa-lg"></i>
                                    </span>
                                </p>                            
                            </div>
                            )
                            } 


                            <Card.Text style={{height: "40px", textAlign: "center"}}>
                                {event.place.name}
                            </Card.Text> 
                        </Card.Body>
                            
                        <Card.Footer style={{display:"block", margin:"0px"}}>
                            <EventModal event={event} />
                        </Card.Footer>
                        </Card>
                        </CardDeck>
                        
                );
            })
        }

        {
            !filteredEvents && !this.props.loading &&  
            <CardDeck style={{margin:"4px", width: '400px'}}>
                            
                        <Card className="text-center" style={{ width: '14rem' }}>
        
                           
 
                            <Card.Body >
                            <Card.Title style={{ height: "50px", textTransform: "UPPERCASE", textAlign:"center"}}>Brak dostępnych Eventów</Card.Title>

                            <Card.Text style={{height: "40px", color: 'red'}}>
                                Brak Eventu o podanej nazwie!
                            </Card.Text> 
                            </Card.Body>
                            
                           
                      
                        </Card>
                        </CardDeck>
        }
        
        
        
        </div>
        
        {/* {this.state.more < this.props.events.length &&
        <div className="containerMore">
             <Button type="submit" size="lg" onClick={this.showMore} style={{width:"200px", marginTop:"16px", marginBottom:"16px", textAlign:"center", backgroundColor:"#999999", borderColor:" #999999"}}> Więcej </Button>{' '}
        </div>
        } */}
    
    
        </>
        ); 
    }
}
export default Events

