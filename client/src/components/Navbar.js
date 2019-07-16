import React from 'react'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import swal from 'sweetalert'
import '../App.css'

export default class  Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            login: localStorage.getItem("isLogIn"),
            changeClass: 'test-hide'
        }
    }

    componentDidMount(){
        if(JSON.parse(this.state.login) === true){
            this.setState({
                changeClass : 'test-show'
            })
        }
    }

    funcCall = () => {
        swal({title: "You have Logged Out",
            text: "Kindly Refresh the site"})
        localStorage.setItem("isLogIn2",false)
        localStorage.setItem("isLogIn",false)
        this.setState({
            login:localStorage.getItem("isLogIn"),
            changeClass:    "test-hide"

        })
    }


    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
                {
                    /* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to='/' className='logo-class'>
                        <img src={logo} alt="store" className="navbar-brand" />                    
                    </Link>
                    <ul className="navbar-nav align-items-center ">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                        <li className={this.state.changeClass}>
                            <button onClick={()=>this.funcCall()} className="nav-button">Log Out</button>
                        </li>

                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus " />
                            </span>
                            my cart

                        </ButtonContainer>
                    </Link>
            </NavWrapper>
        )
    }

}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }

`

