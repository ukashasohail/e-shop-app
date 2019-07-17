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
import Cat1 from './components/categories/Cat1';
import Cat2 from './components/categories/Cat2'
import Cat3 from './components/categories/Cat3'
import Cat4 from './components/categories/Cat4'
import Cat5 from './components/categories/Cat5'
import Cat6 from './components/categories/Cat6'
import Cat7 from './components/categories/Cat7'
import Cat8 from './components/categories/Cat8'


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
        <Route path="/Mobiles" component={Cat1}></Route>
        <Route path="/Laptops" component={Cat2}></Route>
        <Route path="/Menswear" component={Cat3}></Route>
        <Route path="/Womenswear" component={Cat4}></Route>
        <Route path="/Fragrances" component={Cat5}></Route>
        <Route path="/Watches" component={Cat6}></Route>
        <Route path="/Cameras" component={Cat7}></Route>
        <Route path="/ElectronicHouseholdItems" component={Cat8}></Route>

        <Route component={Default}></Route>
      </Switch>
      <Modal />
      </React.Fragment>
    )
  }
}

export default App;
