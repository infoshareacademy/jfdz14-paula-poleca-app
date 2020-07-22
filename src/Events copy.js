import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/Events.css';
import Finder from './components/Finders/Finder'



class Events extends React.Component {
    
    state = {
        events: [],
        filter: ''
    }

    handleOnFormChange = (textFilter) => {
        this.setState({
            filter: textFilter
        })
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
                <>
                <Finder 
                    onFormChange={this.handleOnFormChange}
                    filterValue = {this.state.filter}
                    />
                <h2>Events</h2>    
                <ListGroup>
             
                
                {
                    this.state.events
                    .filter((event) => {
                        return event.place.name.toLocaleLowerCase()
                        .includes(this.state.filter.toLocaleLowerCase())
                    })
                    .map((event) => {
                        
                        return <ListGroup.Item  key = {event.id}>
                            <div className="event-card">
                               
                                    <h5>{event.name}</h5>
                                    <p className="event-name">
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
                        </ListGroup.Item>
                    })
                }
                </ListGroup>
                </>
        ); 
    }
}
export default Events