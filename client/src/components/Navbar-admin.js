import React, { Component } from 'react'
import styled from 'styled-components'
import InsertItem from './itemsChange/InsertItem'
import UpdateItem from './itemsChange/UpdateItem'
import DeleteItem from './itemsChange/DeleteItem'

export default class NavbarAdmin extends Component {
    constructor(props){
        super(props)
        this.state={
            openModal: false,
            login:  localStorage.getItem("isLogIn2"),
            visible: 'none',
        }
        
    }

    componentDidMount(){
        if(JSON.parse(this.state.login) === true){
            this.setState({
                visible: 'block'
            })
            
        }
    }
    
    testFunc1 = () =>{
        this.setState({
            openModal:true
        })
    }

    render() {
        if(this.state.openModal==false){
            return (
            
                <div className='navbar-admin' style={{display: this.state.visible}}>
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

