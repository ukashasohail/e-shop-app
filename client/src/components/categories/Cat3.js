import React,{Component} from 'react'
import MainCat from '../MainCat'
import Title from '../Title'
import {ProductConsumer} from '../../context'

export default class Cat3 extends Component {
    render() {
        return (
           <React.Fragment>
        <div className='py-5'>
                <div className='container'>
                <Title  title="Men's Wear" />
                    <div className='row'>
                        <ProductConsumer>
                            {(value)=>{
                                return value.products.map(product =>{
                                    if(product.category === 3){
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
