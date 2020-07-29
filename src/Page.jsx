import React from 'react';
import img from './img/gdansk.jpg';
import './styles/Page.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';


const Page = () => {
    return (
        <Jumbotron>
         <h1>Paula Poleca!</h1>
        <p>
        Zbiór  największych i najciekawszych imprezy oraz wydarzeń w Trójmieście!
         Na bieżąco zapewniamy użytkownikom informacje na temat najnowszych wydarzeń kulturalnych i rozrywkowych.
         Zapoznaj się z nadchodzącycmi wydarzeniami w Twojej okolicy!


        </p>
        <p>
            <Button as={NavLink} to="/events" variant="primary">Wydarzenie</Button>
        </p>
        </Jumbotron>
    );
}
 
export default Page;