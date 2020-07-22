import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/Events.css';


class Events extends React.Component {
    
    render() {
        return (
        <>
        <h2>Eventy</h2>
        <ListGroup>
            {
            this.props.events
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
                    
                </ListGroup.Item>
            })
        }
        </ListGroup>
        </>
        ); 
    }
}
export default Events