// import React, { Component } from 'react';

// import Modal from 'react-bootstrap/Modal'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import Button from 'react-bootstrap/Button';
// import Events from './Events'


// class EventModal extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {}
// }
// render() { 
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [title, setTitle] = React.useState("Transitioning...");

//   const showModal = () => {
//     setIsOpen(true);
//   };

//   const hideModal = () => {
//     setIsOpen(false);
//     setTitle("Transitioning...");
//   };

 

//   return (
//     <>
//       <Button onClick={showModal}>Dowiedz się więcej</Button>
//       <div key = {event.id}>
//         <Modal  show={isOpen} onHide={hideModal}>
//         <Modal.Header>
//           <Modal.Title> {event.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{event.descShort} </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={hideModal}>Zamknij</Button>
//           <Button  variant="success" onClick={hideModal}>Przejdz do Wydarzenia</Button>

//         </Modal.Footer>
//       </Modal>
//       </div>

//     </>
//   );
//   }}
//   export default EventModal