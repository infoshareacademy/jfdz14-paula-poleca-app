import React from 'react'
import Form from "react-bootstrap/Form";

class Finder extends React.Component {

    handleOnChange = (event) => {
        this.props.onFormChange(event.target.value)
    }

    render(){

        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                   
                    <Form.Control 
                    style = {{maxWidth: "160px", marginRight:"16px", borderColor: "#008000"}} 
                    type="text" 
                    placeholder="Znajdź swój Event!"
                    value={this.props.filterValue}
                    onChange={this.handleOnChange}
                    />
                    {/* <Form.Text className="text-muted">
                    Znajdź swój Event!
                    </Form.Text> */}
                </Form.Group>
            </Form>
        );
    }
}


export default Finder