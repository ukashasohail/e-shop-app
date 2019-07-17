import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import swal from 'sweetalert'

// import AreSure from './itemsChange/AreSure'

 class MainCat extends Component {
    constructor(props){
        super(props)

        this.state={
            title:'',
            img: '',
            price:'',
            company:'',
            info:'',
            category:'',
            testId: this.props.product.id,
            login : localStorage.getItem("isLogIn"),
            visible: 'none',
            deleteDisplayed:'none',
            updateDisplayed:'none'
        }
    }

    componentDidMount(){
       
            console.log(this.state.login)
            if(JSON.parse(this.state.login) === true){
            this.setState({
                visible:'block'
            })
            
        }

        
    }

    updateItem =() =>{
        this.setState({
            updateDisplayed:'flex',
        })
        console.log(this.state.testId)
    }

    deleteItem =() =>{
        console.log("hamza",this.state.testId)
        this.setState({
            deleteDisplayed:'flex',
        })
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
            
            const {testId,title,img,price,company,info,category} = this.state;
            
            let dataInserted = {
                // ids,testId,
                itemId:testId,
                title:title,
                img:img,
                price:price,
                company:company,
                info:info,
                category:category
                
            }
            console.log('The form was submitted with the following data:');
            console.log(dataInserted);
            axios.post("/updateItem",dataInserted)
                .then(res =>{
                  console.log("response from server ",res.data)
                }) 
                swal({title: "Item Has Been Updated",
                text: "Kindly Refresh the site"})
            this.props.history.push('/')

        }

    deletedItem = () =>{
        let itemDel = {
            delId : this.state.testId
        }
        axios.post("/deleteItem",itemDel)
                .then(res =>{
                  console.log("response from server ",res.data);
                }) 
        console.log("hello from areSure", this.state.testId)
        swal({title: "Item Has Been Deleted From the Database",
            text: "Kindly Refresh the site"})
            this.setState({
                nextPage:true
            })
        this.props.history.push('/')


    }

    cancel = () =>{
        this.setState({
            deleteDisplayed:'none',
            updateDisplayed:'none',
        })
        console.log(this.state.login)
        // this.props.history.push('/')
    }


    render() {
            const {id, title , img , price , inCart } = this.props.product;
            return(
                <React.Fragment>
                <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                <ProductConsumer>
                    {(value)=>(
                        
                        <div className='img-container p-5' onClick={() => 
                            value.handleDetail(id)
                        }>
                            <Link to="/details">
                                <img src={img}  alt='Product' className='card-img-top'/>
                            </Link>
                            <button className='cart-btn' disabled={inCart? true: false} onClick={()=>{
                                value.addToCart(id); 
                                value.openModal(id);
                            }}>
                            {inCart?(<p className='text-capitalize mb-0' disabled>in cart</p>):(<i className='fas fa-cart-plus' />)}
                            </button>
                        </div>
                    )}
                </ProductConsumer>
                
                     {/*card-footer*/}
                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>{title}</p>
                        <h5 className='text-blue font-italic mb-0'>
                        <span className='mr-1'>$</span>
                        {price}
                        </h5>
                    </div>
                    <div style={{display:this.state.visible}} className='test' >
                        <div className='test-div test-div1' onClick={() => this.updateItem()}><button className='bttn card-btn'>Update Item</button></div>
                        <div className='test-div test-div2' onClick={()=> this.deleteItem() }><button className='bttn card-btn'>Delete Item</button></div>
                    </div>
                </div>
            </ProductWrapper>

            {/* FOR DELETION OF AN ITEM */}
            <ModalContainer2 style={{display: this.state.deleteDisplayed}}>
                        <div className='container'>
                            <div className='row'>
                                <div id='modal' className='modalTest col-10 mx-auto col-md-12 col-lg-10 text-center text-capitalize p-5'>
                                        <h1>Are You Sure To Delete Item ?</h1>
                                        <h5>This will permanently Delete</h5>
                                        <div className='class-btn'>
                                            <span><button className='delete-btn' onClick={() => this.deletedItem()}>Yes, Delete it</button></span>
                                            <span><button className='delete-btn cancel-btn' onClick={() => this.cancel() }>Cancel</button></span>
                                        </div>
                                </div>
                            </div>
                        </div>
            </ModalContainer2>


            {/* FOR UPDATION OF AN ITEM */}

            <ModalContainer2 style={{display: this.state.updateDisplayed}}>
                <div className='container'>
                <div className='row'>
                <div id='modal' className='modalTest col-10 mx-auto col-md-12 col-lg-10 text-center text-capitalize p-5'>
                    <h1>Update Item</h1>
                    <h3>Item ID {this.state.testId}</h3>
                    <div className="FormCenter">
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
                          <button className="bttn">Update Item</button>
                      </div>
                    </form>
                        <button className="bttn bttn-items" onClick={()=>this.cancel()}>Cancel</button>
                    
                  </div>             
                            </div>
                        </div>
                    </div>
                </ModalContainer2>


            </React.Fragment>
        )
        // else if(itemsDelete === true){
        //     return(
                
        //     )
        // }
}
}

MainCat.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}

.img-container{
    position:relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 1s linear
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
} 
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform : translate(100%, 100%);
    transition : all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color: var(--mainBlue);
    transition: none;
}
`
const ModalContainer2 = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom:0;
background: rgba(0,0,0,0.3);
align-items : center;
z-index: 1;
justify-content: center;
#modal{ 
background: var(--mainWhite);
}
`
export default withRouter(MainCat);

 {/* <AreSure testId = {this.state.testId} display = {this.state.display}/> */}