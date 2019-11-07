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
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Register extends React.Component {

   state = {
      userName: "",
      password: "",
      repeatPassword: "",
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

   onClick = () => {
      // alert("SII");

   }

   const useStyles = makeStyles((theme: Theme) =>
      createStyles({
         close: {
            padding: theme.spacing(0.5),
         },
      }),
   );

   export default function SimpleSnackbar() {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);

   const handleClick = () => {
      setOpen(true);
   };

   const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
      if (reason === 'clickaway') {
         return;
      }
      setOpen(false);
   };

   render() {
      return (
         <div>

            <Snackbar
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
               }}
               open={open}
               autoHideDuration={6000}
               onClose={handleClose}
               ContentProps={{
                  'aria-describedby': 'message-id',
               }}
               message={<span id="message-id">Note archived</span>}
               action={[
                  <Button key="undo" color="secondary" size="small" onClick={handleClose}>
                     UNDO
                  </Button>,
                  <IconButton
                     key="close"
                     aria-label="close"
                     color="inherit"
                     className={classes.close}
                     onClick={handleClose}
                  >
                     <CloseIcon />
                  </IconButton>,
               ]}
            />

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
                                    <Input type="text" name="userName" placeHolder={T.translate("register.labels.userName")} onChange={this.handleChange} />
                                 </InputGroup>
                                 <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                       <i className="icon-lock" />
                                    </InputGroupAddon>
                                    <Input type="password" name="password" placeHolder={T.translate("register.labels.password")} onChange={this.handleChange} />
                                 </InputGroup>
                                 <InputGroup className="mb-4">
                                    <InputGroupAddon addonType="prepend">
                                       <i className="icon-lock" />
                                    </InputGroupAddon>
                                    <Input type="password" name="repeatPassword" placeHolder={T.translate("register.labels.repeatPassword")} onChange={this.handleChange} />
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
            <button onClick={(event) => this.onClick()}>click me</button>
         </div>
      );
   }
}

export default Register;