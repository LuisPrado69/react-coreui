import * as React from 'react';
import { Link } from 'react-router-dom';
import {
   Container,
   Row,
   Col,
   Card,
   CardBody,
   CardFooter,
   Button,
   Input,
   InputGroup,
   InputGroupAddon,
} from 'reactstrap';
import T from 'i18n-react';
import axios from "axios";

class Register extends React.Component {
   state = {
      userName: "",
      password: "",
      repeatPassword: "",
      validationCorrect: false,
      error: "",
      alertColor: "",
   }
   handleSubmit = async (e) => {
      e.preventDefault();
      // TODO: PENDING VALIDATION
      const arraySend = {
         "username": this.state.userName,
         "password": this.state.password,
         "repeatPassword": this.state.repeatPassword,
         "role": "USER"
      }
      // const urlReact = 'http://localhost:3000';
      const urlNode = 'http://localhost:4000';
      await axios.post(urlNode + '/api/v1/auth/register', arraySend)
         .then(response => {
            if (response.status === 200) {
               this.setState({
               validationCorrect: true,
               error: response.data.message,
               alertColor: 'alert alert-success fade show',
             });
            }
         })
         .catch(error => {
            console.log(error.response.data)
            debugger;
            this.setState({
               validationCorrect: true,
               error: error.response.data.message,
               alertColor: 'alert alert-danger fade show',
             });
         })
   }
   // Add value to state
   handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value })
   }
   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <div className="app flex-row align-items-center">
                  <Container>
                     <Row className="justify-content-center">
                        <Col md="6">
                           <Card className="mx-4">
                              <CardBody className="p-4">
                                 <h1>{T.translate("register.title")}</h1>
                                 <p className="text-muted">{T.translate("register.labels.createYourAccount")}</p>
                                 <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                       <i className="icon-user" />
                                    </InputGroupAddon>
                                    <Input type="text" name="userName" placeHolder={T.translate("register.labels.userName")} required onChange={this.handleChange} minlength="4"/>
                                 </InputGroup>
                                 <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                       <i className="icon-lock" />
                                    </InputGroupAddon>
                                    <Input type="password" name="password" placeHolder={T.translate("register.labels.password")} required onChange={this.handleChange} minlength="4"/>
                                 </InputGroup>
                                 <InputGroup className="mb-4">
                                    <InputGroupAddon addonType="prepend">
                                       <i className="icon-lock" />
                                    </InputGroupAddon>
                                    <Input type="password" name="repeatPassword" placeHolder={T.translate("register.labels.repeatPassword")} required onChange={this.handleChange} minlength="4"/>
                                 </InputGroup>
                                 <InputGroup className="mb-4">
                                    {
                                       this.state.validationCorrect
                                          ?
                                          <Col xs="12">
                                             <div className={this.state.alertColor} role="alert">{this.state.error}</div>
                                          </Col>
                                          :
                                          null
                                    }
                                 </InputGroup>
                                 <Button color="success" block>
                                    {T.translate("register.labels.createAccount")}
                                 </Button>
                              </CardBody>
                              <CardFooter className="text-center">
                                 <Link to="/login">
                                    <Button color="primary" className="mt-3">
                                       {T.translate("register.labels.return")}
                                    </Button>
                                 </Link>
                              </CardFooter>
                           </Card>
                        </Col>
                     </Row>
                  </Container>
               </div>
            </form>
         </div>
      );
   }
}

export default Register;