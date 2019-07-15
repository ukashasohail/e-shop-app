import React, { Component } from 'react'
import styled from 'styled-components'
import InsertItem from './itemsChange/InsertItem'
import UpdateItem from './itemsChange/UpdateItem'
import DeleteItem from './itemsChange/DeleteItem'

export default class NavbarAdmin extends Component {
    constructor(props){
        super(props)
    }

    state ={
        openModal: false,
    }

    
    
    testFunc1 = () =>{
        this.setState({
            openModal:true
        })
    }

    render() {
        if(this.state.openModal==false){
            return (
            
                <div className='navbar-admin'>
                        <div className='btn-div btn-div-1'>
                            <button className=' bttn bttn-1' onClick={() => this.testFunc1()}>Insert Item</button>
                        </div>
                </div>
            )        
        }
        else{
            return(
                <InsertItem />
            )
        }
        
    }
}

