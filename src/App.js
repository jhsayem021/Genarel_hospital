import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Footer from './Component/Footer/Footer';
import AllService from './Component/All-Service/AllService';

function App() {
  return (
    <div className="app-background">
        <BrowserRouter>
        <Header></Header>
        <Switch>
     <Route exact  path="/" >
         <Home></Home>
       </Route>
       <Route path="/home" >
         <Home></Home>
       </Route>
       <Route path="/allservices" >
         <AllService></AllService>
       </Route>
       <Route path="/about" >
         <About></About>
       </Route>
    
       <Route path="/contact" >
        <Contact></Contact>
       </Route>
    
       <Route path="/register" >
        <Register></Register>
       </Route>
       <Route path="*" >
        <PageNotFound></PageNotFound>
       </Route>
       
     </Switch>
     <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
