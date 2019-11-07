import * as React from 'react';
// import { Link } from 'react-router-dom';
import {
  // Container,
  // Row,
  // Col,
  // CardGroup,
  // Card,
  // CardBody,
  // Button,
  // InputGroup,
  // InputGroupAddon,
  Input,
  Form
} from 'reactstrap';
// import T from 'i18n-react';
import axios from "axios";

class Login extends React.Component {

  state = {
    userName: "",
    password: "",
    validationCorrect: false,
    error: "",
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: PENDING VALIDATION
    const arraySend = {
      "username": this.state.userName,
      "password": this.state.password
    }

    const urlReact = 'http://localhost:3000/#/';
    const urlNode = 'http://localhost:4000';

    await axios.post(urlNode + '/api/v1/auth/login', arraySend)
      .then(response => {
        if (response.status === 200) {
          window.location.href = urlReact;
        }
      })
      .catch(error => {
        if (error.response.data.message.length == 1) {
          this.setState({
            validationCorrect: true,
            error: error.response.data.message[0].value,
          });
        } else {
          this.setState({
            validationCorrect: true,
            error: error.response.data.message,
          });
        }
      })
  }

  // Add value to state
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      // <Form onSubmit={this.handleSubmit} className="was-validated">
      //   <div className="app flex-row align-items-center">
      //     <Container>
      //       <Row className="justify-content-center">
      //         <Col md="8">
      //           <CardGroup>
      //             <Card className="p-4">
      //               <CardBody className="text-center">
      //                 <h1 className="text-center">TODO: SISTEM NAME</h1>
      //                 <p className="text-muted">{T.translate('login.title')}</p>
      //                 <InputGroup className="mb-3">
      //                   <InputGroupAddon addonType="prepend">
      //                     <i className="icon-user" />
      //                   </InputGroupAddon>
      //                   <Input 
      //                     type="text" 
      //                     placeholder={T.translate('login.labels.userName')} 
      //                     name="userName" 
      //                     onChange={this.handleChange} 
      //                     required 
      //                     minlength="4"
      //                     className="form-control-warning"
      //                   />
      //                 </InputGroup>
      //                 <InputGroup className="mb-4">
      //                   <InputGroupAddon addonType="prepend">
      //                     <i className="icon-lock" />
      //                   </InputGroupAddon>
      //                   <Input 
      //                     type="password" 
      //                     placeholder={T.translate('login.labels.password')} 
      //                     name="password" 
      //                     onChange={this.handleChange}
      //                     required
      //                     minlength="4"
      //                     className="form-control-warning"
      //                   />
      //                 </InputGroup>
      //                 <Row>
      //                   {
      //                     this.state.validationCorrect
      //                       ?
      //                       <Col xs="12">
      //                         <div className="alert alert-danger fade show" role="alert">{this.state.error}</div>
      //                       </Col>
      //                       :
      //                       null
      //                   }
      //                   <Col xs="6">
      //                     <Button color="primary" className="px-4">
      //                       {T.translate("login.labels.login")}
      //                     </Button>
      //                   </Col>
      //                   <Col xs="6" className="text-right">
      //                     <Button color="link" className="px-0">
      //                       {T.translate("login.labels.changePassword")}
      //                     </Button>
      //                   </Col>
      //                 </Row>
      //               </CardBody>
      //             </Card>
      //             <Card
      //               className="text-white bg-primary py-5 d-md-down-none"
      //               style={{ width: 44 + '%' }}
      //             >
      //               <CardBody className="text-center">
      //                 <div>
      //                   <h2>{T.translate("login.labels.signUp")}</h2>
      //                   <p>
      //                     {/* TODO: SISTEM INFO */}
      //                     Lorem ipsum dolor sit amet, consectetur adipisicing
      //                     elit, sed do eiusmod tempor incididunt ut labore et
      //                     dolore magna aliqua.
      //                     </p>
      //                   <Link to="/register">
      //                     <Button color="primary" className="mt-3" active tabIndex={-1}>{T.translate("login.labels.registerNow")}</Button>
      //                   </Link>
      //                 </div>
      //               </CardBody>
      //             </Card>
      //           </CardGroup>
      //         </Col>
      //       </Row>
      //     </Container>
      //   </div>
      // </Form>

      <Form novalidate="" name="simpleForm">
        <div className="position-relative form-group">
          <label>First Name</label>
          <Input name="firstName" id="firstName" placeHolder="First Name" autocomplete="given-name" type="text" className="is-valid form-control"/>
          <div className="invalid-feedback">
          </div>
        </div>
        <div className="position-relative form-group">
          <label>Last Name</label>
          <Input name="lastName" id="lastName" placeholder="Last Name" autocomplete="family-name" type="text" className="form-control" value="" />
          <div className="invalid-feedback">Last name is required</div>
        </div>
        <div className="position-relative form-group">
          <label >User Name</label>
          <Input name="userName" id="userName" placeholder="User Name" autocomplete="username" type="text" className="form-control" value="" />
          <div className="invalid-feedback">Username is required</div>
        </div>
        <div className="position-relative form-group">
          <label>Email</label>
          <Input name="email" id="email" placeholder="Email" autocomplete="email" type="email" className="form-control" value="" />
          <div className="invalid-feedback">Email is required!</div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="position-relative form-group">
              <label>Password</label>
              <Input name="password" id="password" placeholder="Password" autocomplete="new-password" type="password" className="form-control" value="" />
              <div className="invalid-feedback">Password is required</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position-relative form-group">
              <label>Password</label>
              <Input name="confirmPassword" id="confirmPassword" placeholder="Confirm password" autocomplete="new-password" type="password" className="form-control" value="" />
              <div className="invalid-feedback">Password confirmation is required</div>
            </div>
          </div>
        </div>
        <div className="position-relative form-group">
          <div className="custom-checkbox custom-control">
            <Input type="checkbox" id="accept" className="custom-control-input" />
            <label className="custom-control-label">I accept the terms of use</label>
            <div className="invalid-feedback">You have to accept our Terms and Conditions!</div>
          </div>
        </div>
        <div className="position-relative form-group">
          <button type="submit" className="mr-1 btn btn-primary disabled">Submit</button>
          <button type="button" className="mr-1 btn btn-success">Validate</button>
          <button type="reset" className="mr-1 btn btn-danger">Reset</button>
        </div>
      </Form>

      // <Form className="was-validated">
      //   <FormGroup>
      //     <Label htmlFor="inputSuccess2i">Non-required input</Label>
      //     <Input
      //       type="text"
      //       className="form-control-success"
      //       id="inputSuccess2i"
      //     />
      //   </FormGroup>
      //   <FormGroup>
      //     <Label htmlFor="inputWarning2i">Required input</Label>
      //     <Input
      //       type="text"
      //       className="form-control-warning"
      //       id="inputWarning2i"
      //       required
      //     />
      //   </FormGroup>
      // </Form>
    );
  }
}
export default Login;