
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Forms extends React.Component {
        state = {
          title: "Title",
          description: "Description",
          link: "Link",
          city: " ",

        };
      
        
        keyUpHandlerTitle = (event) => {
          this.setState({
            title: event.target.value,
          })
          console.log(this.state.title)
        }

        keyUpHandlerDesc = (event) => {
            this.setState({
                description: event.target.value,
            })
        }


        keyUpHandlerLink = (event) => {
            this.setState({
                link: event.target.value
            })
        }

        handlerOnChange = (event) =>{
            console.log(this.state.city)


            this.setState({
                city: event.target.value
            })
        }

        saveDataInLolcalStorage = () => {
            localStorage.setItem("new_event", JSON.stringify([`${this.state.title}`,`${this.state.city}`, `${this.state.description}`, `${this.state.link}`]))
        }


    render(){
        return (
            <div style={{marginLeft: 16, marginTop: 16}}>
            <Form>
                    <h2>Dodaj nowe wydarzenie</h2>
                    <p>Chcesz się podzielić z innymi nadchodzącycm wydarzeniem? Znasz miejsce, cene i godzinę? Dodaj nowe wydarzenie do PaulaPoleca!</p>
                <Form.Group controlId="title"  >
                    <Form.Label>Nazwa wydarzenia</Form.Label>
                    <Form.Control type="text" onKeyUp={this.keyUpHandlerTitle} placeholder={"Tytuł" }/>
                </Form.Group>
    
                <Form.Group controlId="city">
                    <Form.Label >Wybierz miasto</Form.Label>
                    <Form.Control as="select" onChange={this.handlerOnChange} >
                    <option>Miasto</option>
                    <option>Gdańsk</option>
                    <option>Gdynia</option>
                    <option>Sopot</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.File id="event_img" label="Example file input" />
                </Form.Group>
        
                <Form.Group controlId="desc">
                    <Form.Label>Opis wydarzenia: </Form.Label>
                    <Form.Control as="textarea" rows="3" onKeyUp={this.keyUpHandlerDesc} />
                </Form.Group>
                <Form.Group>
                <Form.Label>Link do wydarzenia</Form.Label>
                    <Form.Control type="text" onKeyUp={this.keyUpHandlerLink} placeholder="Link do wydarzenia"/>
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

