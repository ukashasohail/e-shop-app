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
        insertItem: false,
        updateItem:false,
        deleteItem: false
    }

    
    
    testFunc1 = () =>{
        this.setState({
            openModal:true,
            insertItem:true
        })
    }

    testFunc2 = () =>{
        this.setState({
            openModal:true,
            insertItem:false,
            updateItem:true,
            deleteItem:false
        })
    }

    testFunc3 = () =>{
        this.setState({
            openModal:true,
            insertItem:false,
            updateItem:false,
            deleteItem:true
        })
    }

    render() {
        if(this.state.openModal==false){
            return (
            
                <div className='navbar-admin'>
                        <div className='btn-div btn-div-1'>
                            <button className=' bttn bttn-1' onClick={() => this.testFunc1()}>Insert Item</button>
                        </div>
                        <div className='btn-div btn-div-1'>
                            <button className=' bttn bttn-2 ' onClick={() => this.testFunc2()}>Update Item</button>
                        </div>
                        <div className='btn-div btn-div-1'>
                            <button className='bttn bttn-3' onClick={() => this.testFunc3()}>Delete Item</button>
                        </div>
                </div>
            )        
        }
        else if(this.state.openModal && this.state.insertItem){
            return(
                <InsertItem />
            )
        }
        else if(this.state.openModal && this.state.updateItem){
            return(
                <UpdateItem />
        )
        }
        else{
            return(
                <DeleteItem />
            )
        }
        
    }
}

const ModalContainer1 = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom:0;
background: rgba(0,0,0,0.3);
display : flex;
align-items : center;
z-index: 1;
justify-content: center;
#modal{ 
background: var(--mainWhite);
}
`
