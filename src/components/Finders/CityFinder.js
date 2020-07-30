import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'



class CityFinder extends React.Component {


    allCities = () => {
        return this.props.onFormChange('')
    } 

    cityGdansk = () => {
        return this.props.onFormChange('Gdańsk')
    } 
    citySopot = () => {
        return this.props.onFormChange('Sopot')
    } 
    cityGdynia = () => {
        return this.props.onFormChange('Gdynia')
    } 


    render() {
        return(
            <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'blue'}} id="dropdown-basic">
                    Wybierz miasto!
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onSelect={this.allCities}>
                         Wszystko
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={this.cityGdansk}>
                         Gdańsk
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={this.citySopot}>
                         Sopot
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={this.cityGdynia}>
                         Gdynia
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}



export default CityFinder