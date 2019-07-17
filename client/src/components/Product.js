import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export default class  Product extends React.Component{

// functionCall = () =>{
//     return(
//     <div className='row'>
//     <ProductConsumer>
//         {(value)=>{
//                 return value.products.map(product =>{
//                     return <MainCat key={product.id}  product={product} />
//                 })
//                 }
//         }
//     </ProductConsumer>
//     </div> 
//         )
//        }

       
    state ={
        testArray: ['images/product-1.png','images/product-2.png','images/product-3.png','images/product-4.png','images/product-5.png','images/product-6.png','images/product-7.jpg','images/product-8.png'],
        testIndex :['/Mobiles','/Laptops','/Menswear','/Womenswear','/Fragrances','/Watches','/Cameras','/ElectronicHouseholdItems'],
        testName: ['Mobiles', 'Laptops', 'Men Wears', 'Women Wears','Fragrances','Watches','Cameras','Electronic Household Items']
    }

    render(){
        // const {id, title , img , price , inCart } = this.props.product;
        return(
           <React.Fragment>
               {this.state.testArray.map((elem,index)=>{
                   return(
                       <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3' key={index}>
                <div className='card' >
                        <div className='img-container p-5'>
                            <Link to={this.state.testIndex[index]}>
                                <img src ={elem} alt="Product" className="card-img-top"/>
                            </Link>
                        </div>
                        <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>{this.state.testName[index]}</p>
                        </div>
                </div>
                </ProductWrapper>

                   )
               })
                }               











               {/* <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                        <div className='img-container p-5'>
                            <Link to='/Cat1'>
                                <img src ={image} alt="Product" className="card-img-top"/>
                            </Link>
                        </div>
                        <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>Category 1</p>
                        </div>
                </div>
                </ProductWrapper>
                <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                        <div className='img-container p-5'>
                            <Link to='/Cat2'>
                                <img src ={image} alt="Product" className="card-img-top"/>
                            </Link>
                        </div>
                        <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>Category 2</p>
                        </div>
                </div>
               </ProductWrapper>
               <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                        <div className='img-container p-5'>
                            <Link to='/Cat2'>
                                <img src ={image} alt="Product" className="card-img-top"/>
                            </Link>
                        </div>
                        <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>Category 2</p>
                        </div>
                </div>
               </ProductWrapper>
               <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                        <div className='img-container p-5'>
                            <Link to='/Cat2'>
                                <img src ={image} alt="Product" className="card-img-top"/>
                            </Link>
                        </div>
                        <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>Category 2</p>
                        </div>
                </div>
               </ProductWrapper> */}
        {/* <div className='py-5'>
            <div className='container'>
                   <div className='row'>
                        <p>Hello this is sample text</p>
                        <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/Cat1'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button'>Click Me</button>
                        </Link>
                    </div>
                   </div>
                   <div className='row'>
                        <p>Hello this is sample text</p>
                        <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/Cat2'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button'>Click Me</button>
                        </Link>
                    </div>
                   </div>
            </div>
        </div> */}
</React.Fragment> 
        )
    }

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
