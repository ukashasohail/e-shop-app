import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import swal from 'sweetalert'
import '../App.css';


class Admin extends Component {
    constructor(props) {
        super(props);
        axios.get("/adminpath",(req,res)=>{
            console.log("getdata",res.data)
        })
        .then(user=> {
           this.setState({
                adminItem: user.data,
            })    
        })

        
    }
    state = {
        email: '',
        password: '',
        nextPage: false,
        adminItem :    []
    };

    handleChange =(e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    
    handleSubmit =(e) => {
        e.preventDefault();
        const {email,password,adminItem} = this.state
        // adminItem.forEach((item)=>{
        //     if(adminItem[item].emails === email && adminItem[item].passwords === password){
        //         console.log("the form was submit with the following data")
        //         console.log(this.state.email,this.state.password);        
        //     }
        // })
        let isFound = false
        localStorage.setItem("isLogIn2",false)
        localStorage.setItem("isLogIn",false)
        for(var i=0; i< adminItem.length;i++){
            if(adminItem[i].emails === email && adminItem[i].passwords === password){
                isFound = true
                localStorage.setItem("isLogIn",true)
                localStorage.setItem("isLogIn2",true)
                console.log('The form was submitted with the following data:');
                console.log(this.state.email,this.state.password);
                swal({
                    icon: "success",
                    title: "Successfully logged in",
                    text:"Kindly Refresh the site"
                  });
                  this.props.history.push('/')
            }  
        }

        if(isFound === false){
            swal({
                title: "Invalid Id OR Password",
                className: "red-bg",
                
            })
        }
      
    }
    render() {
        return (
            <div className="App">
              <div className="App__Aside"></div>
              <div className="App__Form">
                  <div className="FormTitle">
                   
                    <h1>Sign In</h1>
                    <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign In</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
    
            </div>
        )
    }
}
export default withRouter(Admin);
