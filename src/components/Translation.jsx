import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Authenticated from './Authenticated.jsx';

import { i18n } from '../index.js';

class Translation extends Component {

  constructor(props) {
    super(props);
  }

  changeLanguage = (language) => {
    i18n.activate(language);
  }

  render() {
    return (
      <translation className="row align-items-center">
        <Link className="d-flex justify-content-center text-primary" href onClick={() => this.changeLanguage('en')} >
          EN
        </Link>
        |
        <Link className="d-flex justify-content-center text-primary" href onClick={() => this.changeLanguage('fr')} >
          FR
        </Link>
      </translation>
    );
  }

}

export default Translation;
