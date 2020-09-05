
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import style from '../styles/Form.css';
import {DATABASE_URL} from "../index";
import firebase from 'firebase';


const initialState = {
    name: "",
    place : {
        id: Math.floor(Math.random*100),
        name : ""
      },
    attachments : [ {
        fileName : ""
      } ],
    descLong: "",
    urls: "",
    file: null,

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

        handleOnChangeSelect = (event) =>{
            this.setState({
                place: {
                    name : event.target.value
                }
            })
        }

        handleOnSubmit = (event) => {

            event.preventDefault();

            firebase.storage().ref('events/' + Math.floor(Math.random()*100))
                .put(this.state.file)
                .then(snapshot => {
                    snapshot.ref.getDownloadURL().then(url => {
                        const newEvent = {
                            name : this.state.name,
                            place : {
                                id: Math.floor(Math.random()*100),
                                name : this.state.place.name,
                              },
                            attachments : [{
                                fileName : url,
                              }],
                            descLong: this.state.descLong,
                            urls: this.state.urls,        
                            }
            
                        fetch(`${DATABASE_URL}/events.json`, {
                            method: 'POST',
                            body: JSON.stringify(newEvent)
                        }).then(() => {
                            this.props.onAdd();
                            this.resetForm();
                        })
                    })
                })
        }

        imgHandleOnChange = (event) => {
            this.setState({
                file: event.target.files[0]
            })
        }

        // fetchImg = () => {

        //     firebase.storage().ref('img/')
        //     .getDownloadURL()
        //     .then(url => {
        //         this.setState({
        //             url,
        //         }, () => {
        //             this.props.addNewAvatar(this.state.url);
        //         }) 
        //     })           
        // }
                
    render(){
        return (
            <div  style={{marginLeft: 16, marginTop: 16, marginBottom: 100}}>
            <h2>Dodaj nowe wydarzenie</h2>
            {
            this.props.user 
            ?
            <>
            <Form noValidate autoComplete="off" onSubmit={this.handleOnSubmit}>
                    
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
                    placeholder="Tytuł" 
                    min="4" max="100" 
                    onChange={this.handleOnChange}
                    placeholder={"Tytuł" } 
                    required/>
                </Form.Group>
    
                <Form.Group>
                    <Form.Label >Wybierz miasto</Form.Label>
                    <Form.Control 
                    value={this.state.place.name}
                    as="select" 
                    onChange={this.handleOnChangeSelect}
                    required
                    >
                    <option>Miasto</option>
                    <option>Gdańsk</option>
                    <option>Gdynia</option>
                    <option>Sopot</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group >
                    <Form.Label>Opis wydarzenia: </Form.Label>
                    <Form.Control 
                    value={this.state.descLong}
                    name="descLong"
                    as="textarea" 
                    placeholder="Opis wydarzenia" 
                    min="10" max="100" 
                    rows="3" 
                    onChange={this.handleOnChange}
                    required/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Link do wydarzenia</Form.Label>
                    <Form.Control 
                    name= "urls"
                    id= "urls"
                    type="url" 
                    min="5" max="100" 
                    placeholder="Link do wydarzenia"
                    onChange={this.handleOnChange}
                    required
                    />
                </Form.Group>
                <Form.Group style={{display:"flex"}}>
                    <Form.File
                        name="attachments"
                        id="attachments"
                        type='file' 
                        onChange={this.imgHandleOnChange}
                    />

                </Form.Group>
                </div>
            
                <Button className="button" type="submit">
                Zapisz
                </Button>
             </Form>
             </>
              :
              <h4>Zaloguj się aby dodać Event!</h4>
              }
            </div>
        
            );
          }


    }

    

export default Forms;

