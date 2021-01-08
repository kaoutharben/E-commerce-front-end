
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom";
import Header from './Header';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Home from './Home';
import Footer from './Footer';
import CategoryList from "./CategoryList";
import macaroni  from './macaroni.jpg';
import bake from "./bake.jpg"; 
import bg from "./bgC.jpg";
import HeaderRes from "./HeaderRes";
function App() {
  return (
    <Router>   
      <div className="app">
        <Switch>
        <Route path="/LogIn" >
            <LogIn/>
          </Route>
          <Route path="/SignUp" >
            <SignUp/>
          </Route>
          <Route path="/produits">
            <Header hideProduct/>
            <CategoryList id="12" picture={bg} title="Boulangerie Viennoiserie" left= {bake} letftTitle="Boulangerie" right= {macaroni}rightTitle="Patisserie"/>
            <Footer/>
          </Route>
          
        < Route  path="/" >        
            <HeaderRes/>
            <Home/>
            <Footer/>
        </Route>
      </Switch>
      </div>
    </Router>
 
  );
}

export default App;
