import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTabPane,
  MDBTabContent,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOption,
  MDBSelectOptions,
  activePill
} from "mdbreact";
import "./checkOutPage.css"

class Pills extends Component {
  state = {
    items: {
      default: "1"
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };
  selectNextTab = () => {
    this.setState({
      activePill: (+this.state.activePill + 1).toString()
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow className="my-2" center>
          <MDBCard className="w-100">
            <MDBCardBody>
              <MDBRow>
                <MDBContainer fluid>
                <MDBRow>
                  <MDBCol lg="8">
                    <MDBCol md="6" className="mb-4">
                      <label htmlFor="firstName">First name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                      />
                    </MDBCol>
                    <MDBCol md="6" className="mb-2">
                      <label htmlFor="lastName">Last name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                      />
                    </MDBCol>
                    <MDBCol>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            @
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control py-0"
                          placeholder="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <label htmlFor="email">Email (optional)</label>
                      <input
                        type="text"
                        id="email"
                        className="form-control mb-4"
                        placeholder="youremail@example.com"
                      />
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        className="form-control mb-4"
                        placeholder="1234 Main St"
                      />
                      <label htmlFor="address-2">Address 2 (optional)</label>
                      <input
                        type="text"
                        id="address-2"
                        className="form-control mb-4"
                        placeholder="Apartment or suite"
                      />
                    </MDBCol>
                  </MDBCol>
                  <MDBCol lg="4" md="10" sm="12">
                    <MDBCard>
                      <MDBCardBody>
                        <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                          Summary
                        </h4>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="8">
                            MDBootstrap UI KIT (jQuery version) - License 6-10
                            poeple + unlimited projects
                          </MDBCol>
                          <MDBCol sm="4">$ 2000</MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="8">Premium support - 2 years</MDBCol>
                          <MDBCol sm="4">$ 200</MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="8">MDB Membership - 2 years</MDBCol>
                          <MDBCol sm="4">$ 100</MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="8">
                            <strong>Total</strong>
                          </MDBCol>
                          <MDBCol sm="4">
                            <strong>$ 2300</strong>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
            
                  <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-4">
                      <label htmlFor="country">Country</label>
                      <select
                        className="custom-select d-block w-100"
                        id="country"
                        required
                      >
                        <option>Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-4">
                      <label htmlFor="state">State</label>
                      <select
                        className="custom-select d-block w-100"
                        id="state"
                        required
                      >
                        <option>Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-4">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <div className="margining">
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="chekboxRules"
                    />
                    <label className="form-check-label" htmlFor="chekboxRules">
                      I accept the terms and conditions
                    </label>
                  </div>
                  <hr />
                  <MDBBtn
                    gradient="aqua"
                    size="lg"
                    className="font-weight-bold"
                    block
                    onClick={this.selectNextTab}
                  >
                    Confirm order
                  </MDBBtn>
                </MDBContainer>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Pills;
