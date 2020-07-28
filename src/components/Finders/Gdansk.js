import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


class Gdansk extends React.Component {

    state = {
      events: []
    }
  
    
  
    componentDidMount() {
        fetch('https://isa.mateuszmarzecki.pl/v1/proxy?url=https://planerkulturalny.pl/api/rest/events.json ')
            .then(response => response.json())
            .then(events => {
                console.log(events)
                this.setState({
                    events: events,
                    filter: 'gdańsk'
                })
            }
            );
    }
    render() {
        return(

            <div className="m-3">
                <h1>Posts</h1>
                
                <ListGroup>
                    {
                        this.state.events
                            .filter((event) => {
                                return event.name.toLowerCase()
                                    .includes(this.state.filter.toLowerCase())
                            })
                            .map((event) => {
                                return <ListGroup.Item key={event.id}>{event.name}</ListGroup.Item>
                            })
                    }
                </ListGroup>
            </div>

        )
    }
}

export default Gdansk