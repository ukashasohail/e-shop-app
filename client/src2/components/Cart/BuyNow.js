import React from 'react'
import { Link } from 'react-router-dom'


export default function BuyNow() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/form'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button'>buy now</button>
                        </Link>
                    </div>
                </div>
            </div>
        
        </React.Fragment>
    )
}
