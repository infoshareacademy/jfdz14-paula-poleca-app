import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'



class CityFinder extends React.Component {


    allCities = () => {
        return this.props.onFormChange('')
    } 

    cityGdansk = () => {
        return this.props.onFormChange('Gdań')
    } 
    citySopot = () => {
        return this.props.onFormChange('Sop')
    } 
    cityGdynia = () => {
        return this.props.onFormChange('Gdy')
    }
    cityMalbork = () => {
        return this.props.onFormChange('Malbo')
    } 
    cityPuck = () => {
        return this.props.onFormChange('Puck')
    }  


    render() {
        return(
            <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'blue'}} id="dropdown-basic">
                    Wybierz miasto!
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onSelect={this.allCities}>
                         Wszystkie
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
                    <Dropdown.Item onSelect={this.cityMalbork}>
                         Malbork
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={this.cityPuck}>
                         Puck
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}



export default CityFinder