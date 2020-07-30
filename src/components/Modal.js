import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


const EventModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
   
  
    return (
      <>
      <Button onClick={showModal} style={{textAlign:"center"}}>Dowiedz się więcej</Button>
        <Modal show={isOpen} onHide={hideModal} >
            <div>
            <Modal.Header>
            <Modal.Title>"event.name"</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>"event.startDate.slice(0, 10)"</div>
            <div> "event.descLong" </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={hideModal}>Zamknij</Button>
            <Button  variant="success" onClick={hideModal}>Przejdz do Wydarzenia</Button>

          </Modal.Footer>
            </div>

        </Modal>
      </>
    );
}
  export default EventModal



