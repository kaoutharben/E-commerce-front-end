
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom";
import Header from './Header';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Home from './Home';
import Footer from './Footer';
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
          
        < Route  path="/" >        
            <Header/>
            <Home/>
            <Footer/>
        </Route>
      </Switch>
      </div>
    </Router>
 
  );
}

export default App;
