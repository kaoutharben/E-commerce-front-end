import React from 'react';
import './CategoryList.css';
import Search from "./Search";
import Contact from "./ContactChart";
import Items from "./Items";



function CategoryList({id,picture, title, left,letftTitle, right,rightTitle }) {
   
    return (
        <div className="categoryList">
           <div className="header__catgL"  style={{backgroundImage: "url("+picture+")"}} >
                <p className="title__catgL">{title}</p>
           </div>
            <Search  hideButtons />
           <div className="catg__left__right">
               <div className="left__catgL">
                    <img className="left__pict" src={left} alt='left'/>
                    <p className="picCatg__disc">{letftTitle}</p>

               </div>
               <div className="right__catgL">
                    <img className="right__pict" src={right} alt='right'/>
                    <p className="picCatg__disc">{rightTitle}</p>

               </div>
           </div>
        
        <Items title="Boulangerie"/>
        <div className="orizontal__home"></div>
        <Contact/>
            
        </div>
    )
}

export default CategoryList;
