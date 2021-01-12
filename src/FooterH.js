import React ,{useState, useEffect }from 'react';
import Footer from "./Footer";
import FooterRes from "./FooterRes";

function HeaderResH() {
    const[isMobile,setIsMoile]=useState(window.matchMedia("(max-width :1023px)").matches);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setIsMoile(window.matchMedia("(max-width :1023px)").matches);
        })
    })
    return (
        <div>
             <div className="headerRes">     {
            isMobile?(<FooterRes/>):(<Footer/>)
     }
      </div>
        </div>
    )
}

export default HeaderResH
