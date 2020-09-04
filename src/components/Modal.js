import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gdansk from './gdansk1.jpg'


class EventModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    showModal = () => {
        this.setState({
            isOpen: true
        })
    };

    hideModal = () => {
        this.setState({
            isOpen: false
        })
    };

    render() {
        const { event } = this.props;

        return (
            <div >
                <Button onClick={this.showModal} style={{backgroundColor:"#008000", borderColor:"#008000"}} >Szczegóły</Button>
                <Modal show={this.state.isOpen} onHide={this.hideModal} >
                    <Modal.Header>
                        <Modal.Title>{event.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                         event.attachments && event.attachments[0] !== undefined || null
                        ? <Card.Img variant="top" src={event.attachments[0].fileName} alt="imgEvent" />
                        : <Card.Img variant="top" src={gdansk} alt="imgEvent" />
                        }   
                        <div>{event.startDate && event.startDate.slice(0, 10)}</div>
                        <div> {event.descLong} </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.hideModal}>Zamknij</Button>
                        <Button variant="success" onClick={this.hideModal}>
                            <a href={event.urls && event.urls.www } 
                            style={{color:"white"}} 
                            target="_blank"
                            >
                                Przejdz do Wydarzenia</a>
                                </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default EventModal;
