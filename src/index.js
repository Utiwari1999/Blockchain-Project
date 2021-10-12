import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import Hash from './components/Hash';
import Block from './components/block';
import Blockchain from './components/Blockchain';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={App} />
        <Route path="/hash" component={Hash} />
        <Route path="/block" component={Block} />
        <Route path="/blockchain" component={Blockchain} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

