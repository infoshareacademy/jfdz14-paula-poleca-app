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
                Podziel się nowym wydarzeniem w Trójmiscie. Uzupełnij wymagane dane, aby poinformować o nadchodządym nowym wydarzeniu!
            </p>
            <div className={styles.form}>
                <input className={styles.formInput} type="text" id="title" name="title" defaultValue="Tytuł"/>
                <div>
                  <p>Podaj cene wydarzenia w PLN: </p>
                  <input className={styles.formInput}  type="number" id="pirce" name="price"/>                
                </div>
                <select className={styles.formInput} id="town" name="town">
                    <option value="Gdansk">Gdańsk</option>
                    <option value="Gdynia">Gdynia</option>
                    <option value="Sopot">Sopot</option>
                </select>
                <input className={styles.formInput}  type="date" id="date"/>
     
                
                <textarea className={styles.formInput} name="message" rows="10" cols="30">Dodaj krótki opis wydarzenia.</textarea>

                <input className={styles.formInput}  type="file" />
                <button  type="submit" value="Submit" className={styles.button}> Dodaj </button>

            </div>
        </div>
        );



    return (
        <div>
          <button type="button" onClick={handleOpen} className={styles.button}>
            Dodaj nowe wydarzenie
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