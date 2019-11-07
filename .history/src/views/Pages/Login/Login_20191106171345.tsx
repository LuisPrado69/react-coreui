import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardBody,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Label,
} from 'reactstrap';
import T from 'i18n-react';
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
      <form onSubmit={this.handleSubmit}>
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody className="text-center">
                      {/* <h1 className="text-center">TODO: SISTEM NAME</h1> */}
                      <p className="text-muted">{T.translate('login.title')}</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <i className="icon-user" />
                        </InputGroupAddon>
                        <Input 
                          type="text" 
                          placeHolder={T.translate('login.labels.userName')} 
                          name="userName" 
                          onChange={this.handleChange} 
                          required 
                          minlength="4"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <i className="icon-lock" />
                        </InputGroupAddon>
                        <Input type="password" placeHolder={T.translate('login.labels.password')} name="password" onChange={this.handleChange} required minlength="4" />
                      </InputGroup>

                      <FormGroup>
                        <Label htmlFor="inputWarning2i">Required input</Label>
                        <Input
                          type="text"
                          className="form-control-warning"
                          id="inputWarning2i"
                          required
                        />
                      </FormGroup>
                      
                      <Row>
                        {
                          this.state.validationCorrect
                            ?
                            <Col xs="12">
                              <div className="alert alert-danger fade show" role="alert">{this.state.error}</div>
                            </Col>
                            :
                            null
                        }
                        <Col xs="6">
                          <Button color="primary" className="px-4">
                            {T.translate("login.labels.login")}
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            {T.translate("login.labels.changePassword")}
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card
                    className="text-white bg-primary py-5 d-md-down-none"
                    style={{ width: 44 + '%' }}
                  >
                    <CardBody className="text-center">
                      <div>
                        <h2>{T.translate("login.labels.signUp")}</h2>
                        <p>
                          {/* TODO: SISTEM INFO */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          </p>
                        <Link to="/register">
                          <Button color="primary" className="mt-3" active tabIndex={-1}>{T.translate("login.labels.registerNow")}</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </form>
    );
  }
}
export default Login;