import React from 'react';
import './Header.css';
import FaceIcon from '@material-ui/icons/Face';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ForumIcon from '@material-ui/icons/Forum';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import logo from './Logo.png'; 
import icon from './domain_verification-24px.ico';
const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };
  

function Header() {
    return (
        <div className='header'>
           <img className='header__logo' src={logo} alt=""/>

           <div className='header__mid'>
               <div className='header__option'>
                    <StorefrontIcon  style={{fontSize: '28px', color :'#EFAA24'}} />
                    <span className='mid__line'>Produits</span>

                </div>
                <div className='header__option'>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="28px !important" viewBox="0 0 24 24" width="30px">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                        <rect fill="none" height="24" width="24"/>
                   </g>
                        <g><g><path  class="mid__logoimg" d="M10.23,15.83c0.39,0.39,1.02,0.39,1.41,0l4.24-4.24c0.39-0.39,0.39-1.02,0-1.42v0c-0.39-0.39-1.02-0.39-1.41,0l-3.54,3.53 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.42,0s-0.39,1.02,0,1.41L10.23,15.83z"/>
                        <path class="mid__logoimg" d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.11,4,19,4z M19,17c0,0.55-0.45,1-1,1H6 c-0.55,0-1-0.45-1-1V8h14V17z"/>
                        </g></g></svg>
                     <span className='mid__line'>Promotions</span>
                </div>
                <div className='header__option' >
                    <ForumIcon style={{fontSize: '28px' , color :'#EFAA24'}} />
                    <span className='mid__line'>Contact</span>
                </div>
                <div className='header__option'>
                    <LocalGroceryStoreIcon style={{fontSize: '28px' , color :'#EFAA24'}}/>
                    <span className='mid__line'>Panier</span>
                </div>
           </div>
        <div className='logIn'>
         <FaceIcon  style={{fontSize: '28px', color :'#EFAA24'}}/>
         <span className='text__line'>S'inscrire/Se connecter</span>
         </div>
        </div>
    )
}

export default Header
