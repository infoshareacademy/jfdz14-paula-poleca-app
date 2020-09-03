import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import firebase from 'firebase';
import {DATABASE_URL} from '..';

class AccountItemEdit extends React.Component  {

    state = {
        name: this.props.name,
        surname: this.props.surname,
        city: this.props.city,
    }

    componentDidMount() {
        // if(this.props.user) {
        //     this.setState({
        //       user: this.props.user,
        //       uid: this.props.user.uid,
        //     });                
        //     }   

            let user = firebase.auth().currentUser;
        // firebase.auth().onAuthStateChanged(user => {
            if(user) {
            this.setState({
              user: user,
            //   uid: useruid,
            }, () => {
                this.setState({
                    uid: this.state.user.uid,
                })
            });                
            }
        // });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        }) 
    }

    handleItemSave = () => {
        const form = {
            name: this.state.name,
            surname: this.state.surname,
            city: this.state.city,
        }

        fetch(`${DATABASE_URL}/Users/${this.state.uid}.json`, {
            method: 'PUT',
            body: JSON.stringify(form)
        }).then(() => {
            this.props.onSave();
        }); 
    }

    handleItemClose = () => {
        this.props.onClose();
    }

    render() {

        return (
            <div>
                <Form>
                    <Card>
                        <Card.Header as="h5">Imię</Card.Header>
                        <Card.Body>
                            <Form.Control 
                                type="text" placeholder="Enter name" name="name" 
                                value={this.state.name} onChange={this.handleChange} />
                        </Card.Body>
                    </Card><br/>
                    <Card>
                        <Card.Header as="h5">Nazwisko</Card.Header>
                        <Card.Body>
                            <Form.Control 
                                type="text" placeholder="Enter surname" name="surname" 
                                value={this.state.surname} onChange={this.handleChange} />
                        </Card.Body>
                    </Card><br/>
                    <Card>
                        <Card.Header as="h5">Miasto</Card.Header>
                        <Card.Body>
                            <Form.Control 
                                type="text" placeholder="Enter city" name="city" 
                                value={this.state.city} onChange={this.handleChange} />
                        </Card.Body>
                    </Card><br/>
                    <Button variant="success" onClick={this.handleItemSave}>SAVE</Button>                
                    <Button variant="secondary" onClick={this.handleItemClose}>CLOSE</Button>                
                </Form>

            </div>
        );        
    }

}
 
export default AccountItemEdit;