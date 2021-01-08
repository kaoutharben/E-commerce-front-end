import React ,{useState, useEffect }from 'react';
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

function HeaderRes() {
    const[isMobile,setIsMoile]=useState(window.matchMedia("(max-width :768px)").matches);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setIsMoile(window.matchMedia("(max-width :768px)").matches);
        })
    })
    return (
        <div className="headerRes">     {
            isMobile?(<HeaderMobile/>):(<Header/>)
     }
      </div>
  
    )
}

export default HeaderRes;
