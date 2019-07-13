import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

export default class Confirmed extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-title'>
                    <Title title='Thankyou For Shopping' />
                        <h1>Your order has been placed</h1>
                        <div className='btn-div col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/'>
                            <button className='btn btn-buynow text-uppercase mb-3 px-5' type='button'>Back to Home</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
