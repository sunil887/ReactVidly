import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import  Movies  from './component/movies'
import Navbar from './component/navBar'
import {Route,Redirect} from 'react-router-dom'
import Customer from './component/customer'
import Rental from './component/rental'
import NotFound from './component/notfound'
import MovieDetails from './moviesDetails';
import Home from './component/home'

function App() {
  return (
    
    <div className="App">
    <Navbar></Navbar>
    <main className = 'container' style = {{ marginTop:50}}>
      <switch>
        <Route path = "/movies/:id"  component = {MovieDetails}/>
        <Route path = "/movies" exact component = {Movies} /> 
        <Route path = "/customers" component = {Customer}/>
        <Route path = "/rentals"  component = {Rental}/>
        <Route path= "/" exact component = {Home}/>
        <Redirect from ="/" to = "/movies"/>
        <Route path  = "/notfound" component = {NotFound}/>
        
      </switch>
      
    </main>      
    </div>
  );
}

export default App;
