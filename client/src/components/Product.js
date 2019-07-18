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
        testArray: ['images/product-1.png','images/product-2.png','images/product-3.png','images/product-4.png','images/product-5.png','images/product-6.png','images/product-7.png','images/product-8.png'],
        testIndex :['/Mobiles','/Laptops','/Menswear','/Womenswear','/Fragrances','/Watches','/Cameras','/ElectronicHouseholdItems'],
        testName: ['Mobiles', 'Laptops', 'Men Wears', 'Women Wears','Fragrances','Watches','Cameras','Electronic Household Items']
    }

    render(){
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
                        <p className='mb-0'>{this.state.testName[index]}</p>
                        </div>
                </div>
                </ProductWrapper>

                   )
               })
                }               
</React.Fragment> 
        )
    }

}



const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
    border: 3px solid #2A2A72;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
    margin: 0 auto !important;
}
.card-footer > p{
    font-size: 20px !important
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
    height: 280px !important;
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
