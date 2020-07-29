import React from 'react';
import img from '../img/gdansk.jpg';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="Page">
        <h2>Error Page</h2>
        <h4>Nie ma takiej strony</h4>
        <img src={img} alt=""/>
    </div>        
    );
}
 
export default ErrorPage;

