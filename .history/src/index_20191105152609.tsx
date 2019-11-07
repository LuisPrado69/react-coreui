import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import T from 'i18n-react';
// Styles
// Import Main styles for this application
import './scss/style.scss';
// Temp fix for reactstrap
import './scss/core/_dropdown-menu-right.scss';
// Containers
import Full from './containers/Full';
// Views
import Login from './views/Pages/Login/';
import Register from './views/Pages/Register/';
import Page404 from './views/Pages/Page404/';
import Page500 from './views/Pages/Page500/';
// Translations 
// import Trans from '../public/locals/';

T.setTexts({
  login: {
    title: "Iniciar Sesión",
    labels: {
      userName: "Nombre de usuario",
      password: "Ingrese la contraseña",
      login: "Acceder",
      changePassword: "Cambiar contraseña",
      signUp: "Crear nueva cuenta",
      registerNow: "Registrarse ahora",
    }
  },
  register: {
    title: "Registro",
    labels: {
      createYourAccount: "Crea tu cuenta",
      createAccount: "Crea cuenta",
      return: "Volver",
      userName: "Nombre de usuario",
      password: "Ingrese la contraseña",
      repeatPassword: "Repita la contraseña",
      login: "Acceder",
      changePassword: "Cambiar contraseña",
      signUp: "Crear nueva cuenta",
      registerNow: "Registrarse ahora",
    }
  }
});

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* <T.a text="buttons.exit" href="a's href"/> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/404" component={Page404} />
      <Route exact path="/500" component={Page500} />
      <Route path="/" component={Full} />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
