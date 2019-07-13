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
import Cat1 from './components/Cat1';
import Cat2 from './components/Cat2'
import axios from "axios"

class App extends React.Component{
  render(){
  //   axios.post("/testtt",{
  //     test : "working"
  //   })
  //   .then(res =>{ 
  //     console.log("console from axios")
  //     console.log("data",res.data)
  // })
    return(
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductLists}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/cat1" component={Cat1}></Route>
        <Route path="/cat2" component={Cat2}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
      </React.Fragment>
    )
  }
}

export default App;
