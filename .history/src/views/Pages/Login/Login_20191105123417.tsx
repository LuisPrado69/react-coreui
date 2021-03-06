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
// import env from '../../../.env';
// import axios from 'axios';

class Login extends React.Component {

  obtenerDatos = (e) => {
    e.preventDefault();
    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);

}

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
        <form onSubmit={(event)=>this.obtenerDatos(event)}}>
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
                      <Input type="text" placeHolder={T.translate('labels.userName')} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <i className="icon-lock" />
                      </InputGroupAddon>
                      <Input type="password" placeHolder={T.translate('labels.password')} />
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
        </form>
        </Container>sdffwefew
      </div>
    );
  }
}
export default Login;