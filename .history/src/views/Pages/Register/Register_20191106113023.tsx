// import * as React from 'react';
// import { Link } from 'react-router-dom';
// import {
//    Container,
//    Row,
//    Col,
//    Card,
//    CardBody,
//    CardFooter,
//    Button,
//    Input,
//    InputGroup,
//    InputGroupAddon,
// } from 'reactstrap';
// import T from 'i18n-react';
// import axios from "axios";
// import useForm from 'react-hook-form'
// // import UIkit from 'react-uikit-notify';
// class Register extends React.Component {
//    state = {
//       userName: "",
//       password: "",
//       repeatPassword: "",
//       setOpen: false,
//    }
//    handleSubmit = async (e) => {
//       e.preventDefault();
//       // TODO: PENDING VALIDATION
//       const arraySend = {
//          "username": this.state.userName,
//          "password": this.state.password,
//          "repeatPassword": this.state.repeatPassword,
//          "role": "USER"
//       }
//       // const urlReact = 'http://localhost:3000';
//       const urlNode = 'http://localhost:4000';
//       await axios.post(urlNode + '/api/v1/auth/register', arraySend)
//          .then(response => {
//             if (response.status === 200) {
//             }
//          })
//          .catch(error => {
//             console.log(error.response.data)
//          })
//    }
//    // Add value to state
//    handleChange = ({ target }) => {
//       const { name, value } = target;
//       this.setState({ [name]: value })
//    }
//    onClick = () => {
//       // alert("SII");
//       // const warning_notification = UIkit.notification({message: 'Warning message...', status: 'warning', timeout: 1000});
//       // console.log(warning_notification);
//       // UIkit.util.on(document, 'close', function() { alert('Notification closed'); });
//    }
//    render() {
//       return (
//          <div>
//             <form onSubmit={this.handleSubmit}>
//                <div className="app flex-row align-items-center">
//                   <Container>
//                      <Row className="justify-content-center">
//                         <Col md="6">
//                            <Card className="mx-4">
//                               <CardBody className="p-4">
//                                  <h1>{T.translate("register.title")}</h1>
//                                  <p className="text-muted">{T.translate("register.labels.createYourAccount")}</p>
//                                  <InputGroup className="mb-3">
//                                     <InputGroupAddon addonType="prepend">
//                                        <i className="icon-user" />
//                                     </InputGroupAddon>
//                                     <Input type="text" name="userName" placeHolder={T.translate("register.labels.userName")} onChange={this.handleChange} />
//                                  </InputGroup>
//                                  <InputGroup className="mb-3">
//                                     <InputGroupAddon addonType="prepend">
//                                        <i className="icon-lock" />
//                                     </InputGroupAddon>
//                                     <Input type="password" name="password" placeHolder={T.translate("register.labels.password")} onChange={this.handleChange} />
//                                  </InputGroup>
//                                  <InputGroup className="mb-4">
//                                     <InputGroupAddon addonType="prepend">
//                                        <i className="icon-lock" />
//                                     </InputGroupAddon>
//                                     <Input type="password" name="repeatPassword" placeHolder={T.translate("register.labels.repeatPassword")} onChange={this.handleChange} />
//                                  </InputGroup>
//                                  <Button color="success" block>
//                                     {T.translate("register.labels.createAccount")}
//                                  </Button>
//                               </CardBody>
//                               <CardFooter className="text-center">
//                                  <Link to="/login">
//                                     <Button color="primary" className="mt-3">
//                                        {T.translate("register.labels.return")}
//                                     </Button>
//                                  </Link>
//                               </CardFooter>
//                            </Card>
//                         </Col>
//                      </Row>
//                   </Container>
//                </div>
//             </form>
//             <button onClick={(event) => this.onClick()}>click me</button>
//          </div>
//       );
//    }
// }

// export default Register;



import * as React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class FormsPage extends React.Component {
  state = {
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                City
              </label>
              <input
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="City"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                State
              </label>
              <input
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="state"
                placeholder="State"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Zip
              </label>
              <input
                value={this.state.zip}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="zip"
                placeholder="Zip"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default FormsPage;