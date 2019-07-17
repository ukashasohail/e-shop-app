import React,{Component} from 'react'
import MainCat from '../MainCat'
import Title from '../Title'
import {ProductConsumer} from '../../context'

export default class Cat7 extends Component {
    render() {
        return (
           <React.Fragment>
        <div className='py-5'>
                <div className='container'>
                <Title title="Cameras" />
                    <div className='row'>
                        <ProductConsumer>
                            {(value)=>{
                                return value.products.map(product =>{
                                    if(product.category === 7){
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
