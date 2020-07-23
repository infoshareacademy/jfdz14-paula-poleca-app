import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Forms = () => {
    return (
    <Form>
        <div>
            <h2>Dodaj nowe wydarzenie</h2>
            <p>Chcesz się podzielić z innymi nadchodzącycm wydarzeniem? Znasz miejsce, cene i godzinę? Dodaj nowe wydarzenie do PaulaPoleca!</p></div>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nazwa wydarzenia</Form.Label>
            <Form.Control type="text" placeholder="Tytuł"  isRequired/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Cena</Form.Label>
            <Form.Control type="number" placeholder="PLN"  isRequired/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Wybierz miasto</Form.Label>
            <Form.Control as="select" isRequired>
            <option>Gdańsk</option>
            <option>Gdynia</option>
            <option>Sopot</option>
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Opis wydarzenia: </Form.Label>
            <Form.Control as="textarea" rows="3"isRequired />
        </Form.Group>
        <Form.Group>
        <Form.Label>Link do wydarzenia</Form.Label>
            <Form.Control type="text" placeholder="Link do wydarzenia"/>
        </Form.Group>

        <Button variant="primary" type="submit">
        Zapisz
        </Button>
    </Form>
            );
}
 
export default Forms;


