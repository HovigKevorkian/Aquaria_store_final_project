import React  from "react";
import  "./contactUs.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="dark-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn gradient="aqua" className="contactus-submit-btn"><strong>Register</strong></MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;