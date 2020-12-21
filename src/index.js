import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login';
import Detalhes from './pages/detalhes';
import EsqueciSenha from './pages/senha';
import Inicio from './pages/inicio';
import Cadastrar from './pages/cadastrar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './utils/firebaseConfig';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Inicio />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
