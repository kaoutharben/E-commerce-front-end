import React,{useState} from 'react';
import "./HeaderMobile.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Link }  from "react-router-dom" ;
import logo from './Logo.png'; 

function HeaderMobile() {
    const [isActive ,setIsActive]=useState(false)
    return (
        <div className="headerMobile">

            <Link   className="link__header" to="/">
                <img className='headerMobile__logo' src={logo} alt="logo"/>
           </Link>
           <MenuIcon  className="menu__header" onClick={()=>{
               setIsActive(!isActive);
               console.log(isActive);
           }}/>
        </div>
    )
}

export default HeaderMobile
