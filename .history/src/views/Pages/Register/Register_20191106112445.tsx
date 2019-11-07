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



import React, { Component } from 'react';
    import classNames from 'classnames';
    import validator from 'validator';

    class Register extends Component {
      formDefaults = {
        email: { value: '', isValid: true, message: '' },
        password: { value: '', isValid: true, message: '' },
        confirmPassword: { value: '', isValid: true, message: '' }
      }

      state = {
        ...this.formDefaults
      };

      onChange = (e) => {
        const state = {
          ...this.state,
          [e.target.name]: {
            ...this.state[e.target.name],
            value: e.target.value,
          }
        };

        this.setState(state);
      }

      onSubmit = (e) => {
        e.preventDefault();
        // reset states before the validation procedure is run.
        this.resetValidationStates();
        // run the validation, and if it's good move on.
        if (this.formIsValid()) {
          // form processing here....
        }
      }

      formIsValid = () => {
        const email = { ...this.state.email };
        const password = { ...this.state.password };
        const confirmPassword = { ...this.state.confirmPassword };
        let isGood = true;

        if (!validator.isEmail(email.value)) {
          email.isValid = false;
          email.message = 'Not a valid email address';
          isGood = false;
        }

        // perform addtion validation on password and confirmPassword here...

        if (!isGood) {
          this.setState({
            email,
            password,
            confirmPassword,
          });
        }

        return isGood;
      }

      resetValidationStates = () => {
        // make a copy of everything in state
        const state = JSON.parse(JSON.stringify(this.state));

        /*
        loop through each item in state and if it's safe to assume that only
        form values have an 'isValid' property, we can use that to reset their
        validation states and keep their existing value property. This process
        makes it easy to set all validation states on form inputs in case the number
        of fields on our form grows in the future.
        */
        Object.keys(state).map(key => {
          if (state[key].hasOwnProperty('isValid')) {
            state[key].isValid = true;
            state[key].message = '';
          }
        });

        this.setState(state);
      }

      resetForm = () => {
        this.setState(...this.formDefaults);
      }

      render() {
        const { email, password, confirmPassword } = this.state;
        /*
        Each of the group classes below will include the 'form-group' class,
        and will only include the 'has-error' class if the isValid value is false.
        */
        const emailGroupClass = classNames('form-group',
          { 'has-error': !email.isValid }
        );
        const passwordGroupClass = classNames('form-group',
          { 'has-error': !password.isValid }
        );
        const confirmGroupClass = classNames('form-group',
          { 'has-error': !confirmPassword.isValid }
        );

        return (
          <div className="container">
            <form className="form-signin" onSubmit={this.onSubmit}>
              <h2 className="form-signin-heading">Create Account</h2>

              <div className={emailGroupClass}>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                  value={email.value}
                  onChange={this.onChange}
                  autoFocus
                />
                <span className="help-block">{email.message}</span>
              </div>

              <div className={passwordGroupClass}>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={password.value}
                  onChange={this.onChange}
                />
                <span className="help-block">{password.message}</span>
              </div>

              <div className={confirmGroupClass}>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword.value}
                  onChange={this.onChange}
                />
                <span className="help-block">{confirmPassword.message}</span>
              </div>

              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
        );
      }
    };

    export default Register;