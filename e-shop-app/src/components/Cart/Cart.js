import React from 'react'
import Title from '../Title'
import CartColumns  from './CartColumns'
import Emptycart from './Emptycart'
import { ProductConsumer } from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'
import BuyNow from './BuyNow'

export default class  Cart extends React.Component{
    render(){
        return(
            <section>
                <ProductConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length >0 ){
                            return (
                                <React.Fragment>
                                    <Title name='your' title='cart' />                
                                    <CartColumns />
                                    <CartList value ={value} />
                                    <CartTotals value ={value} />
                                    <BuyNow />
                                </React.Fragment>
                            )
                        }
                        else{
                            return <Emptycart />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }

}