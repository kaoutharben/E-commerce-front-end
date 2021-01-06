import React, {useState} from 'react';
import './SignUp.css';
import logo from './LogoBlack.png'; 
import logoLarge from './logoL.png';
import PersonIcon from '@material-ui/icons/Person';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import { Link, useHistory}  from "react-router-dom" ;
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useStateValue } from "./StateProvider";

function SignUp() {
    const [name ,setName]=useState('');
    const [email,setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[num, setNum]=useState('');
    const[passvalid, setPassvalid]=useState('');
   const[errorNum,setErrorNum]=useState('');
    const[errorEmail,setErrorEmail]=useState('');
    const[errorName,setErrorName]=useState('');
    const[errorPass,setErrorPass]=useState('');
    const[errorPassvalid,setErrorPassvalid]=useState('');
      
      
    const history =useHistory();
   
    const [user,dispatch] = useStateValue();
    const signUp= e=>{
        var v  =true ;
        e.preventDefault();
        dispatch({
            type: "SET_USER",
            //replaced with bd user 
            user: "hi",
          });
          setErrorName("");
          setErrorNum("");
          setErrorEmail('');
          setErrorPass('');
          setErrorPassvalid('');
          if(name ===""){
                v=false;
                setErrorName("Vous n'avez pas spécifiez votre nom !");
          }
          else if (num===""){
            v=false;
              setErrorNum("Vous n'avez pas spécifiez votre nom !");
          }
           else if(num.length<10){
            v=false;
            setErrorNum("Format Incorrecte ! ") 
          }
          else if( email===""){
            v=false;
            setErrorEmail("Vous n'avez pas spécifiez votre email !")
          }
           else if( email===""){
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
          else if(passvalid===""){
            v=false;
            setErrorPassvalid("Champs Vide ! "); 
          }
          else if(passvalid!=password){
            v=false;
            setErrorPassvalid("Mot de passe Invalide ! "); 
          }


        //add it to BD
        if( v===true){ history.push('/');}
       
    };
    return (
        <div className='signUp'>
            <Link className='header__sign'  to="/">
            <img className="logo__head"src={logo} alt="logo"/>
            </Link>
            <img className="logo__form" src={logoLarge} alt="logoLarge"/>
            <form className="info__user">
                <div className ="input__name">
                    <input type ='text' placeholder="| Prénom et Nom" value={name} onChange={e =>setName(e.target.value)}  />
                    <PersonIcon className="icon" style={{fontSize: '28px' , color :'#EFAA24'}}/>
                </div>
                <span className="error">{errorName}</span>
               
                <div className ="input__signUp">
                    <input type ='tel' placeholder="| Numéro de téléphone"  value={num} onChange={e =>setNum(e.target.value)}/>
                    <SmartphoneIcon className="icon" style={{fontSize: '28px' , color :'#EFAA24'}}/>
                </div>
                <span className="error">{errorNum}</span>
                

                <div className ="input__signUp">
                <   input type ='email' placeholder="| Email" value={email} onChange={e =>setEmail(e.target.value)} />
                    <AlternateEmailIcon className="icon" style={{fontSize: '28px' , color :'#EFAA24'}}/>
                </div>
                 <span className="error">{errorEmail}</span>



                <div className ="input__signUp">
                    <input type ='password' placeholder="| Mot de passe"  value={password} onChange={e => setPassword(e.target.value)}/>
                    <VpnKeyIcon className="icon" style={{fontSize: '28px' , color :'#EFAA24'}}/>
                </div>
                 <span className="error">{errorPass}</span>
               

                <div className ="input__signUp">
                    <input type ='password' placeholder="| Vérifier mot de passe"  value={passvalid} onChange={e => setPassvalid(e.target.value)} />
                    <VpnKeyIcon className="icon" style={{fontSize: '28px' , color :'#EFAA24'}}/>
                </div>
                 <span className="error">{errorPassvalid}</span>
               
                <button type='submit' className='signUp__signInButton' onClick={signUp}>S'inscrire</button>
            </form>
        <Link className ="connexion " to="/LogIn">
           <p >Se connecter ici </p>
           </Link>
        </div>
    )
}


export default SignUp;
