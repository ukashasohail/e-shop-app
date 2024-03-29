import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css'
import NavbarAdmin from '../Navbar-admin'
import styled from 'styled-components'
import swal from 'sweetalert'


class InsertItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title:'',
            img: '',
            price:'',
            company:'',
            info:'',
            category:'',
            back:false,


        };

       
    }


    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value,
        });
    }
    

    handleSubmit =(e) => {

            e.preventDefault();
            const {title,img,price,company,category,info} = this.state;
            if(title && img && price && company && category && info !== ''){
                console.log('The form was submitted with the following data:');
                console.log(this.state);

                let itemInsert = {
                  title:title,
                  img:img,
                  price:Number(price),
                  company:company,
                  category:Number(category),
                  info:info
                }
                axios.post("/insertItem",itemInsert)
                .then(res =>{
                  console.log("response from server ",res.data)
                }) 
                swal({title: "Data Inserted Successfully",
            text: "Kindly Refresh the site"})
                this.setState({
                  back:true
                })
            }
            else{
                console.error("Please Fill Out Complete Form")
                alert("Please Fill Out Complete Form")

            }
    
            
        }
        
        
        render() {

            if(this.state.back == false){

                return (
                    <ModalContainer1>
                    <div className='container'>
                        <div className='row'>
                            <div id='modal' className='modalTest col-10 mx-auto col-md-12 col-lg-10 text-center text-capitalize p-5'>
                            <div className="FormCenter">
                    <h1>Insert Item</h1>
                    <form onSubmit={this.handleSubmit} className="FormFields">
                      <div className="FormField-items">
                        <label className="label-items" htmlFor="title">Title Name</label>
                        <input type="text" id="title" className="label-item-input" placeholder="Title Name" name="title" value={this.state.title} onChange={this.handleChange} />
                      </div>
                      <div className="FormField-items">
                        <label className=" label-items" htmlFor="img">Image path</label>
                        <input type="text" id="img" className="label-item-input" placeholder="Image URL" name="img" value={this.state.img} onChange={this.handleChange} />
                      </div>
                      <div className="FormField-items">
                        <label className=" label-items" htmlFor="price">Price</label>
                        <input type="text" id="price" className="label-item-input" placeholder="Enter Price" name="price" value={this.state.price} onChange={this.handleChange} />
                      </div>
                      <div className="FormField-items">
                        <label className=" label-items" htmlFor="company">Company</label>
                        <input type="text" id="company" className="label-item-input" placeholder="Enter Company" name="company" value={this.state.company} onChange={this.handleChange} />
                      </div>
                      <div className="FormField-items">
                        <label className=" label-items" htmlFor="category">Category</label>
                        <input type="text" id="category" className="label-item-input" placeholder="Enter Category" name="category" value={this.state.category} onChange={this.handleChange} />
                      </div>
                      <div className="FormField-items-info">
                        <label className=" label-items" htmlFor="info">Info about Item</label>
                        <input type="text" id="info" className="label-item-input" placeholder="Enter Info" name="info" value={this.state.info} onChange={this.handleChange} />
                      </div>
        
        
                      <div className="FormField-items">
                          <button className="bttn">Add Item</button>
                      </div>
                    </form>
                        <button className="bttn bttn-items" onClick={()=> this.setState({back:true})}>Cancel</button>
                    
                  </div>             
                            </div>
                        </div>
                    </div>
                </ModalContainer1>
                   
                );
            }
            else{
                return(
                    <NavbarAdmin />
                )
            }
                
    }
}
export default InsertItem;

const ModalContainer1 = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom:0;
background: rgba(0,0,0,0.3);
display : flex;
align-items : center;
z-index: 1;
justify-content: center;
#modal{ 
background: var(--mainWhite);
}
`