import React from 'react';
import img from './img/gdansk.jpg';
import './styles/Page.css';

const Page = () => {
    return (
        <div className="Page">
            <h1>Main Page</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ducimus temporibus inventore, nesciunt ab sunt sint similique iusto earum qui sequi beatae deleniti possimus amet, dicta illo iste debitis assumenda.</h4>
            <img src={img} alt=""/>
        </div>
    );
}
 
export default Page;