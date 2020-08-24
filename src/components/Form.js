
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import style from '../styles/Form.css';
import {DATABASE_URL} from "../index";


const initialState = {
    title: " ",
    description: " ",
    link: " ",
    city: " ",
}

class Forms extends React.Component {
        state = initialState

        resetForm = () => {
            this.setState(initialState)
        }

        handleOnChange = (event) =>{
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        handleOnSubmit = (event) => {
            event.preventDefault();
            fetch(`${DATABASE_URL}/events.json`, {
                method: 'POST',
                body: JSON.stringify(this.state)
            }).then(() => {
                this.props.onAdd();
                this.resetForm();
            })
        }
        
    render(){
        return (
            <div  style={{marginLeft: 16, marginTop: 16}}>
                <Form onSubmit={this.handleOnSubmit}>
                    <h2>Dodaj nowe wydarzenie</h2>
                    <p>Chcesz się podzielić z innymi nadchodzącycm wydarzeniem? Znasz miejsce, cene i godzinę? Dodaj nowe wydarzenie do PaulaPoleca!</p>
                <div className="form-wrapper">
                <Form.Group controlId="title" >
                    <Form.Label>
                        Nazwa wydarzenia
                        </Form.Label>
                    <Form.Control 
                    name="title"
                    type="text" 
                    onChange={this.handleOnChange}
                    placeholder={"Tytuł" } />
                </Form.Group>
    
                <Form.Group controlId="city">
                    <Form.Label >Wybierz miasto</Form.Label>
                    <Form.Control 
                    as="select" 
                    name="city"
                    onChange={this.handlerOnChange}>
                    <option>Miasto</option>
                    <option>Gdańsk</option>
                    <option>Gdynia</option>
                    <option>Sopot</option>
                    </Form.Control>
                </Form.Group>
    
                <Form.Group controlId="desc">
                    <Form.Label>Opis wydarzenia: </Form.Label>
                    <Form.Control 
                    name="description"
                    as="textarea" 
                    rows="3" 
                    onChange={this.hadleOnChange}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Link do wydarzenia</Form.Label>
                    <Form.Control 
                    name= "link"
                    type="text" 
                    placeholder="Link do wydarzenia"
                    onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group style={{display:"flex"}}>
                    <Form.File
                        name="img"
                        id="event_img" />
                </Form.Group>
                </div>
            
                <Button className="button " type="submit">
                Zapisz
                </Button>
            </Form>
            </div>
        
            );
          }


    }

    

export default Forms;

