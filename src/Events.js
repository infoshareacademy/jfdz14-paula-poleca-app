import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


class Events extends React.Component {
    
    state = {
        events: []
    }

    componentDidMount() {
            fetch(' https://isa.mateuszmarzecki.pl/v1/proxy?url=https://planerkulturalny.pl/api/rest/events.json ')
                .then(response => response.json())
                .then(events => {
                    
                    this.setState({
                        events: events
                    })
                })
    }

 



    render() {
            return(

                <ListGroup>
                {
                    this.state.events
                    .map((event) => {
                        
                        return <ListGroup.Item key = {event.id}>
                            <div className="movie-card">
            
                                <div className="movie-card card">
                                {/* <img
                                    src={card}
                                    alt=""
                                /> */}
                                <div>
                                    <h4>{event.name}</h4>
                                    <p className="movie-card-description" style={{ fontSize: "14px" }}>
                                    {event.place.name}
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