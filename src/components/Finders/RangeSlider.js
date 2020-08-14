import React from 'react'
import Form from "react-bootstrap/Form";



class RangeSlider extends React.Component {

    min = 0;
    max = 100;
    step = 20;

    // sliderValue = (event) => {
    //     return this.props.onFormChange(event.target.value)
    // }


    render() {
       
        return(
            
            <Form>
                <Form.Group controlId="formBasicRange">
                    {/* <Form.Label>Range</Form.Label> */}
                    <Form.Control style = {{width: '150px'}}
                    type="range" 
                    min = {this.min}
                    max = {this.max}
                    step = {this.step}
                    // onChange = {this.sliderValue}
                    defaultValue = {this.min}
                          
                    />
                </Form.Group>
            </Form>
            
             
        );
    }
}

export default RangeSlider


