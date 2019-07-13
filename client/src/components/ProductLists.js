import React from 'react'
import Product from './Product'
import Title from './Title'
import NavbarAdmin from './Navbar-admin'


export default class  ProductLists extends React.Component{
    render(){
        return(
            // <div>
            //    <Product />
            // </div>
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                            <NavbarAdmin />
                            <Title name="our" title="Categories" />
                            <div className='row'>
                                <Product />
                            </div> 
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