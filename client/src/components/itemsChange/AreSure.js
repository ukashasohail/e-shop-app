import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { withRouter } from "react-router-dom";

 class AreSure extends Component {
    constructor(props){
        super(props)

        this.state ={
            testId : this.props.testId,
            goBack: false ,
            display:this.props.display,
        }
    }

    deletedItem = () =>{

        axios.post("/deleteItem",this.state.testId)
                .then(res =>{
                  console.log("response from server ",res.data)
                }) 
        console.log("hello from areSure", this.state.testId)
        alert("item delete succesfully")
        this.props.history.push('/')

    }

    cancel = () =>{
        alert("hello world")
        this.setState({
            display:'none'
        })
        // this.props.history.push('/')
    }


    render() {
        if(this.state.goBack === false){
            return (
                <ModalContainer2 style={{display: this.state.display}}>
                        <div className='container'>
                            <div className='row'>
                                <div id='modal' className='modalTest col-10 mx-auto col-md-12 col-lg-10 text-center text-capitalize p-5'>
                                        <h1>Are You Sure To Delete Item ?</h1>
                                        <h5>This will permanently Delete</h5>
                                        <div className='class-btn'>
                                            <span><button onClick={() => this.deletedItem()}>Yes, Delete it</button></span>
                                            <span><button onClick={() => this.cancel() }>Cancel</button></span>
                                        </div>
                                </div>
                            </div>
                        </div>
                </ModalContainer2>
            )

        }
        
    }
}

const ModalContainer2 = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom:0;
background: rgba(0,0,0,0.3);
align-items : center;
z-index: 1;
justify-content: center;
#modal{ 
background: var(--mainWhite);
}
`

export default withRouter(AreSure);