import React, { Component } from 'react'
import '../App.css'
import Confirmed from './Confirmed'
import axios from 'axios'


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Form extends Component {
  constructor(props) {
    super(props);
    // fetch("http://localhost:5000/fetchData")
    // .then(res => {
    //     // res.json()
    //   console.log("res.data",res.data,"res.json()",res.json())
    // })
    // .then(res => console.log("res ", res))
    
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      city:null,
      address:null,
      nextPage: false,
      // displayMenu:false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        address: "",
        city:""
      }
    };
  }

  

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Number: ${this.state.number}
        City: ${this.state.city}
        Address: ${this.state.address}
      `);

      let testObj = {
        Fname: this.state.firstName,
        Lname: this.state.lastName,
        email: this.state.email,
        number: this.state.number,
        city: this.state.city,
        address: this.state.address 
      }
      this.setState({
        nextPage: true,
      })

      axios.post("/insert",testObj)
      .then(res =>{
        console.log("response from server",res.data)
      } )

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "number":
        formErrors.number =
          value.length < 11  ? "minimum 11 characaters required" : "";
        break;
        case "city":
        formErrors.city =
          value.length < 4  ? "minimum 4 characaters required" : "";
        break; 
        case "address": 
        formErrors.address =
          value.length < 20  ? "minimum 20 characaters required" : "";
        break;  
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    if(!this.state.nextPage){
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Buyer Details</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="mobileNumber">
                <label htmlFor="number">Mobile Number</label>
                <input
                  className={formErrors.number.length > 0 ? "error" : null}
                  placeholder="Mobile Number"
                  type="text"
                  name="number"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.number.length > 0 && (
                  <span className="errorMessage">{formErrors.number}</span>
                )}
              </div>
  
              <div className="city">
                <label htmlFor="city">City Name</label>
                <input
                  className={formErrors.number.length > 0 ? "error" : null}
                  placeholder="Enter City"
                  type="text"
                  name="city"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.city.length > 0 && (
                  <span className="errorMessage">{formErrors.city}</span>
                )}
              </div>
  
              <div className="city">
                <label htmlFor="address">Residential Address</label>
                <input
                  className={formErrors.address.length > 0 ? "error" : null}
                  placeholder="Address"
                  type="text"
                  name="address"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.address.length > 0 && (
                  <span className="errorMessage">{formErrors.address}</span>
                )}
              </div>  
              <div className="createAccount">
                <button type="submit">Confirm Order</button>
              </div>
            </form>
          </div>
        </div>
      )
    }
    else{
      return(
        <Confirmed />
      )
    }
    
  }
}

export default Form;
