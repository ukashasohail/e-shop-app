import React,{Component} from 'react'
import Product from './Product'
import MainCat from './MainCat'
import Title from './Title'
import {ProductConsumer} from '../context'

export default class Cat1 extends Component {
    render() {
        return (
           <React.Fragment>
        <div className='py-5'>
                <div className='container'>
                <Title name='Our' title='Products' />
                    <div className='row'>
                        <ProductConsumer>
                            {(value)=>{
                                return value.products.map(product =>{
                                    if(product.category === 1){
                                        return <MainCat key={product.id}  product={product} />
                                    }
                                    
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
