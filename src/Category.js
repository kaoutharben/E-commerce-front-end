import React from 'react';
import "./Category.css";

function Category({pic, title, id}) {
    return (
        <div className="category">
            <div className="pic__catg">
            <img className ="picture" src={pic} alt="category"/>
            <p className="pic__disc">{title}</p>
            </div>
        </div>
    )
}

export default Category;
