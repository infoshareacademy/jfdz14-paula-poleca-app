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
            <h2>Dodaj nowe wydarzenie w Trójmieście!</h2>
            <p>
                Podziel się nowym wydarzeniem w Trójmiscie. Uzupełnij wymagane dane, aby
            </p>
            <div>
            <input type="text" id="title" name="title"/>
            <select id="town" name="town">
                <option value="Gdansk">Gdańsk</option>
                <option value="Gdynia">Gdynia</option>
                <option value="Sopot">Sopot</option>
            </select>
            <input type="date" id="date"/>
            <input type="text" id="pirce" name="price"/>
            <input type='text' id="description" name='description'/>
            <input type="file" />
            <input type="submit" value="Submit"/>

            </div>
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