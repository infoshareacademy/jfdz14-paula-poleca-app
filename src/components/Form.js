
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import style from '../styles/Form.css';
import {DATABASE_URL} from "../index";


const initialState = {
    name: "",
    place: {name: ""},
    attachments: "",
    descShort: ""
}

class Forms extends React.Component {
        state = initialState

        resetForm = () => {
            console.log(initialState)
            this.setState(initialState)
        }

        handleOnChange = (event) =>{
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        handleOnSubmit = (event) => {
           const newEvent = {
                name : "",
                place : {
                    name : ""
                  },
                attachments : [ {
                    fileName : ""
                  } ],
        
                  descShort : ""
        
        }

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
                <Form noValidate autoComplete="off" onSubmit={this.handleOnSubmit}>
                    <h2>Dodaj nowe wydarzenie</h2>
                    <p>Chcesz się podzielić z innymi nadchodzącycm wydarzeniem? Znasz miejsce, cene i godzinę? Dodaj nowe wydarzenie do PaulaPoleca!</p>
                <div className="form-wrapper">
                <Form.Group>
                    <Form.Label>
                        Nazwa wydarzenia
                        </Form.Label>
                    <Form.Control 
                    value={this.state.name}
                    name="name"
                    type="text" 
                    onChange={this.handleOnChange}
                    placeholder={"Tytuł" } />
                </Form.Group>
    
                <Form.Group>
                    <Form.Label >Wybierz miasto</Form.Label>
                    <Form.Control 
                    value={this.state.place.name}
                    as="select" 
                    name="place"
                    onChange={this.handleOnChange}>
                    <option>Miasto</option>
                    <option>Gdańsk</option>
                    <option>Gdynia</option>
                    <option>Sopot</option>
                    </Form.Control>
                </Form.Group>
    
                <Form.Group >
                    <Form.Label>Opis wydarzenia: </Form.Label>
                    <Form.Control 
                    value={this.state.descShort}
                    name="descShort"
                    as="textarea" 
                    rows="3" 
                    onChange={this.handleOnChange}/>
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
                        // name="attachments"
                        id="event_img"
                        onChange={this.handleOnChange}
                        />
                </Form.Group>
                </div>
            
                <Button className="button" type="submit">
                Zapisz
                </Button>
            </Form>
            </div>
        
            );
          }


    }

    

export default Forms;

