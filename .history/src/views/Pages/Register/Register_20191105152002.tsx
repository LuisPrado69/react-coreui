import * as React from 'react';
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
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: PENDING VALIDATION
    const arraySend = {
      "username": this.state.userName,
      "password": this.state.password
    }

    const urlReact = 'http://localhost:3000';
    const urlNode = 'http://localhost:4000';

    await axios.post(urlNode + '/api/v1/auth/register', arraySend)
      .then(response => {
        if (response.status === 200) {
          // Redirect
          console.log("SII");
          window.location.href = urlReact;
        }
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
      <form onSubmit={this.handleSubmit}>
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <h1>Register</h1>
                    <p className="text-muted">{T.translate("register.title")}</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <i className="icon-user" />
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                      <Input type="text" placeholder="Email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <i className="icon-lock" />
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <i className="icon-lock" />
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" />
                    </InputGroup>
                    <Button color="success" block>
                      Create Account
                    </Button>
                  </CardBody>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button className="btn-facebook" block>
                          <span>facebook</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button className="btn-twitter" block>
                          <span>twitter</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </form>
    );
  }
}

export default Register;
