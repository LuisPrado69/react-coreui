import * as Form from "reactstrap/lib/Form";

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

const { Formik } = formik;

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required(),
});

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<FormExample />);