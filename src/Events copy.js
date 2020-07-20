import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import './Events.css';


class Events extends React.Component {
    
    state = {
        events: []
    }

    componentDidMount() {
        fetch(' https://isa.mateuszmarzecki.pl/v1/proxy?url=https://planerkulturalny.pl/api/rest/events.json ')
            .then(response => response.json())
            .then(events => {
                console.log(events);

                this.setState({
                    events: events
                });
            });
    }

    render() {
            return(
                <ListGroup>
                <h2>Events</h2>
                {
                    this.state.events
                    .map((event) => {

                        console.log(event.name);
                        console.log(event.place.name);
                        console.log(event.attachments[0]);
                        if(event.attachments[0] !== undefined)
                            console.warn(event.attachments[0].fileName);
                        console.log(event.urls.www);
                        console.log(event.descLong);
                        
                        console.log('-----------------------');

                        return <ListGroup.Item key = {event.id}>
                            <div className="movie-card">
            
                                <div className="movie-card card">
                                {/* <img
                                    src={card}
                                    alt=""
                                /> */}
                                <div>
                                    <h5>{event.name}</h5>
                                    <p className="movie-card-description" style={{ fontSize: "14px" }}>
                                    {event.place.name}
                                    </p>
                                    {event.attachments[0] !== undefined ? <img src={event.attachments[0].fileName} alt=""/> : null }
                                    <p className="descLong">
                                       {event.descShort} 
                                    </p>
                                    <p className="descLong">
                                       {/* {event.descLong}  */}
                                    </p>
                                    <p>
                                        <a href={event.urls.www} target="_blank">Zobacz link</a>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </ListGroup.Item>
                    })
                }
                </ListGroup>
        ); 
    }
}
export default Events