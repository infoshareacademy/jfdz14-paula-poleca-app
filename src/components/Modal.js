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




  
//   class EventModal extends Component {
//       constructor(props) {
//           super(props);
//           this.state = {
//             isOpen: false,
//             setIsOpen: false,


//           }
//       }


//     showModal = () => {
//         this.setState({
//             setIsOpen: true
//     })};
    
//     hideModal = () => {
//         this.setState({
//             setIsOpen: false
//     })};



//       render() { 
//           return (
//               <>
//               {
//                   this.props.events
//                   .map((event) => {
  
//                       return (
//                         <div>
//                         <Button onClick={this.showModal} style={{textAlign:"center"}}>Dowiedz się więcej</Button>
//                         <Modal show={this.isOpen} onHide={this.hideModal} >
//                             <Modal.Header>
//                             <Modal.Title>{event.name}</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             <div>{event.startDate.slice(0, 10)}</div>
//                             <div> {event.descLong} </div>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="danger" onClick={this.hideModal}>Zamknij</Button>
//                             <Button  variant="success" onClick={this.hideModal}>Przejdz do Wydarzenia</Button>
                
//                           </Modal.Footer>
                
//                         </Modal>


//                         </div>  
//                       );
//                   })
//               }
//               </>
//           );
//       }
//   }
   
//   export default EventModal;
