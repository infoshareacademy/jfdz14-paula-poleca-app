import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styles from './Modal.module.css'






const Form = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className= {styles.modal}>
            <h2>Text in a modal</h2>
            <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
        </div>
        );



    return (
        <div>
          <button type="button" onClick={handleOpen}>
            Open Modal
          </button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            {body}
          </Modal>
        </div>
      )
  };

  export default Form