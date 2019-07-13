import React from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'

export default class  ProductLists extends React.Component{
    render(){
        return(
            // <div>
            //    <Product />
            // </div>
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                            <Title name="our" title="Products" />
                            <div className='row'>
                                <ProductConsumer>
                                    {(value)=>{
                                        return value.products.map(product =>{
                                            return <Product key={product.id}  product={product} />
                                        })
                                        }
                                    }
                                </ProductConsumer>
                            </div> 
                    </div>
                </div>
            </React.Fragment>
        )
    }

}