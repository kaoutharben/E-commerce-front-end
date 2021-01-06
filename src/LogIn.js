import React,{useState} from 'react';
import './LogIn.css';
import { Link, useHistory }  from "react-router-dom" ;
import logo from './LogoBlack.png'; 
import logoLarge from './logoL.png';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

function LogIn() {
    const [email,setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[errorEmail,setErrorEmail]=useState('');
    const[errorPass,setErrorPass]=useState('');
    
    const history =useHistory();
    const signIn=e=>{
        e.preventDefault();
        var v  =true ;
        setErrorEmail('');
          setErrorPass('');
          if( email===""){
            v=false;
            setErrorEmail("Vous n'avez pas spécifiez votre email !")
          }
          else if(!(email.includes('@')) ){
            v=false;
            setErrorEmail("Format Incorrecte !");
        }
        
        
        else if(password ===""){
            v=false;
            setErrorPass("Vous n'avez pas entrez un mot de passe ! ");
          }
        //we need authentication
        if( v===true){ history.push('/');}

    }
    return (
        <div className="logIn">
            <Link className='basket__log' to="/">
            <img className="logo__login"src={logo} alt="logo"/>
            </Link>
            <img className="form__login" src={logoLarge} alt="logoLarge"/>
            <form className="login__user">
                <div className ="inputLog__name">
                    <input type ='text' placeholder="| Email" value={email} onChange={e =>setEmail(e.target.value)}/>
                    <PersonIcon className="iconLog" style={{fontSize: '28px' , color :'#EFAA24'}}/>
                </div>
                <span className="error">{errorEmail}</span>
                

                

                <div className ="input__login">
                    <input type ='password' placeholder="| Mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
                    <VpnKeyIcon className="iconLog" style={{fontSize: '28px' , color :'#EFAA24'}}/>
                </div>
                <span className="error">{errorPass}</span>

                
                <button type='submit' className='logIn__logInButton' onClick={signIn}>Se connecter</button>
            </form>
            <Link className ="connexionLog " to="/SignUp">
                 <span className="error">{errorPass}</span>
           <p >Créer compte ici </p>
           </Link>
        </div>
    )
}

export default LogIn;
