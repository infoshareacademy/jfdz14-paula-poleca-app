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


class Events extends React.Component {
    
    state = {
        filter: '',
        more: 20,
        // add : 0,
        city: ''
    }

    addNumber = parseInt(this.state.add)

    // allEvents = (sliderValue) => {
    //     this.setState({
    //         add: sliderValue
    //     })
    // }

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
    
    // showMore = () => {
    //     let eventslength = this.props.events.length;
    //     let maxLoad = this.state.more + 20;
    //     if(maxLoad < eventslength) {
    //         this.setState({
    //             more: maxLoad,
    //         });            
    //     } else {
    //         while(maxLoad > eventslength ) {
    //             maxLoad = maxLoad - 1;
    //         }
    //         this.setState({
    //             more: maxLoad,
    //         });   
    //     }
    // }

    render() {
       
        const events = this.props.events;
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

                {/* <RangeSlider 
                    onFormChange={this.allEvents}
                    filterValue = {this.state.add}
                /> */}
                {/* <button style = {{width: '50px', height: '50px'}}>{this.state.add}</button> */}
                
             
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
                return event.place.name.toLocaleLowerCase()
                .includes(this.state.filter.toLocaleLowerCase()) || 
                event.name.toLocaleLowerCase()
                .includes(this.state.filter.toLocaleLowerCase()) ||
                event.descShort.toLocaleLowerCase()
                .includes(this.state.filter.toLocaleLowerCase()) ||
                event.startDate.includes(this.state.filter)
            })
            .filter((event) => {
                return event.place.name.toLocaleLowerCase()
                .includes(this.state.city.toLocaleLowerCase())
            })            
            .map((event) => {
                return (
                        <CardDeck key={event.id} style={{margin:"4px"}}>
                        <Card className="text-center" style={{ width: '14rem' }}>
                        {
                         event.attachments && event.attachments[0] !== undefined 
                        ? <Card.Img variant="top" src={event.attachments[0].fileName} alt="imgEvent" style={{height:"150px"}} />
                        : <Card.Img variant="top" src={gdansk} alt="imgEvent" style={{height:"150px"}} />
                        }   
 
                            <Card.Body key={event.id}>
                            <Card.Title style={{ height: "50px", textTransform: "UPPERCASE", textAlign:"center"}}>{event.name}</Card.Title>
                                <p className="addFavourite" 
                                    onClick={() => this.addFavourite(event.id)}>Ulubione  
                                    <span className={event.favourite ? "starColorActive" : "starColor"}>
                                    <i className="fa fa-heart fa-lg"></i>
                                    </span>
                                </p>

                            <Card.Text style={{height: "20px"}}>
                                {event.place.name}
                            </Card.Text> 
                            {/* <Card.Text style={{text: "bold"}}> 
                                {event.startDate.slice(0, 10)}
                             </Card.Text> */}
                            </Card.Body>
                            
                            <Card.Footer style={{display:"block", margin:"0px"}}>
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

