import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Forms extends React.Component {
        state = {
          text: " ",
          city: "Gdańsk"
        };
      
        keyUpHandler = (event) => {
          console.log(event.target.value);
      
          this.setState({
            text: event.target.value,
          })
        }

        handlerOnChange = (event) =>{
            console.log(event.target.value)

            this.setState({
                city: event.target.city
            })
            
        }

        saveDataInLolcalStorage = () => {
            localStorage.setItem("new_event", "{}")
        }


    render(){
        return (
            <div className="my-3">
            <Form>
                    <h2>Dodaj nowe wydarzenie</h2>
                    <p>Chcesz się podzielić z innymi nadchodzącycm wydarzeniem? Znasz miejsce, cene i godzinę? Dodaj nowe wydarzenie do PaulaPoleca!</p>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Nazwa wydarzenia</Form.Label>
                    <Form.Control type="text" onKeyUp={this.keyUpHandler} placeholder={"Tytuł" }/>
                </Form.Group>
        
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Cena</Form.Label>
                    <Form.Control type="number" onKeyUp={this.keyUpHandler} placeholder="PLN" />
                </Form.Group>
        
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label >Wybierz miasto</Form.Label>
                    <Form.Control as="select" onChange={this.handlerOnChange} >
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
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group>
                <Form.Label>Link do wydarzenia</Form.Label>
                    <Form.Control type="text" placeholder="Link do wydarzenia"/>
                </Form.Group>
        
                <Button variant="primary" type="submit" onClick={this.saveDataInLolcalStorage}>
                Zapisz
                </Button>
            </Form>
            </div>
        
            );
          }

    }

    

export default Forms;
