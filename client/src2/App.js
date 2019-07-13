import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import ProductLists from "./components/ProductLists"
import Details from "./components/Details"
import Default from "./components/Default"
import Cart from "./components/Cart"
import Modal from './components/Modal'
import Form from './components/Form';
import Admin from './components/Admin';



class App extends React.Component{
  render(){
    return(
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductLists}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
      </React.Fragment>
    )
  }
}

export default App;
