import React from 'react'
import Product from './Product'
import Title from './Title'
import NavbarAdmin from './Navbar-admin'
import Slider from './Slider'

export default class  ProductLists extends React.Component{
    render(){
        return(
            // <div>
            //    <Product />
            // </div>
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                            <Slider />
                            <div className="white white-2">
                            <div className='heading-txt'>
                            <Title name="our" title="Categories" />
                            </div>
                            <div className='row'>
                                <Product />
                            </div>
                            </div> 
                            <NavbarAdmin />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

{/* <React.Fragment>
<div className='py-5'>
    <div className='container'>
            <Title name="our" title="Products" />
            <div className='row'>
                <ProductConsumer>
                    {(value)=>{
                        return value.products.map(product =>{
                            return <MainCat key={product.id}  product={product} />
                        })
                        }
                    }
                </ProductConsumer>
            </div> 
    </div>
</div>
</React.Fragment> */}