import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AccountItem = (props) => {
    const handleItemEdit = () => {
        console.log('handleItemEdit');
        props.onEdit();
    }
    return (
        <div>
            <Card>
                <Card.Header as="h5">Imię</Card.Header>
                <Card.Body>{props.name}</Card.Body>
            </Card><br/>
            <Card>
                <Card.Header as="h5">Nazwisko</Card.Header>
                <Card.Body>{props.surname}</Card.Body>
            </Card><br/>
            <Card>
                <Card.Header as="h5">Miasto</Card.Header>
                <Card.Body>{props.city}</Card.Body>
            </Card><br/>
            <Button variant="primary" onClick={handleItemEdit}>EDIT</Button>
        </div>
    );
}
 
export default AccountItem;