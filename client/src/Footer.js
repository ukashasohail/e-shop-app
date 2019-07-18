import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './App.css'

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className=" container-fluid footer-main font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="4">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>Home</a>
              </li>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>About Us</a>
              </li>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>Get Started</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>Home</a>
              </li>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>About Us</a>
              </li>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>FAQ's</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>Home</a>
              </li>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>About Us</a>
              </li>
              <li className="list-unstyled">
                <a className='home-links' href="javascript:void();"><i class="fa fa-angle-double-right"></i>FAQ's</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            <MDBRow>
            <div className='icons'>
                <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><a className='icon-links' href="javascript:void();"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a className='icon-links' href="javascript:void();"><i className="fab fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a className='icon-links' href="https://github.com/ukashasohail/e-shop-app"><i className="fab fa-github"></i></a></li>
                            <li className="list-inline-item"><a className='icon-links' href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
                </ul>
            </div>
            </MDBRow>
        </MDBContainer>
      </div>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <span className='icon-links'> &copy; {new Date().getFullYear()} Copyright:</span> <a href="https://www.github.com/hamzabhatti125"> E-Shop-App </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;