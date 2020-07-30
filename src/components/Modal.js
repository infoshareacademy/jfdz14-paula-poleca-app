import React from "react";

import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import Button from 'react-bootstrap/Button';
import Events from './Events'



const EventModal = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

 

  return (
    <>
      <Button onClick={showModal}>Dowiedz się więcej</Button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title> Tytuł</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={hideModal}>Zamknij</Button>
          <Button  variant="success" onClick={hideModal}>Przejdz do Wydarzenia</Button>

        </Modal.Footer>
      </Modal>
    </>
  );
  }
  export default EventModal