import React from 'react'
import Form from "react-bootstrap/Form";

const Finder = () => {
    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control style = {{width: 200}} type="text" placeholder="Szukaj" />
                <Form.Text className="text-muted">
                Znajdź swój Event!
                </Form.Text>
            </Form.Group>
        </Form>
    );
}


export default Finder