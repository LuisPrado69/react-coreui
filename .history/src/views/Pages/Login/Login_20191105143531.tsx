import * as React from 'react';
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
} from 'reactstrap';
import T from 'i18n-react';
import axios from "axios";
// import env from "../../../../.env";

class Login extends React.Component {

  state = {
    userName: "",
    password: "",
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // const { errors, ...sinErros } = this.state
    // const result = validateForm(sinErros);
    // this.setState({ errors: result })
    // if (!Object.keys(result).length) {
    //   const arraySend = {
    //     "username": this.state.email,
    //     "password": this.state.password
    //   }
    const arraySend = {
      "username": this.state.userName,
      "password": this.state.password
    }

    debugger
    console.log(this.state);
    
    const url = 'http://localhost:4000/api/v1/auth/login';

    await axios.post(url, arraySend)
        .then(response => {
          console.error(response)
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
    // Add value to state
    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value })
    } 
  
  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="8">
                  <CardGroup>
                    <Card className="p-4">
                      <CardBody className="text-center">
                        {/* <h1 className="text-center">TODO: SISTEM NAME</h1> */}
                        <p className="text-muted">{T.translate("title")}</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <i className="icon-user" />
                          </InputGroupAddon>
                          <Input type="text" placeHolder={T.translate('labels.userName')} name="userName" onChange={this.handleChange}/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <i className="icon-lock" />
                          </InputGroupAddon>
                          <Input type="password" placeHolder={T.translate('labels.password')} name=""password onChange={this.handleChange}/>
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button color="primary" className="px-4">
                              {T.translate("labels.login")}
                            </Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">
                            {T.translate("labels.change_password")}
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
                          <h2>Sign up</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <Button color="primary" className="mt-3" active>
                          {T.translate("labels.decline")}
                          </Button>
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