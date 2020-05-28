import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolio from './components/portfolioPage/Portfolio.jsx';
import Item from './components/itemPage/Item.jsx';
import Outliner from './components/viewpointPage/Outliner.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'open-iconic/font/css/open-iconic-bootstrap.css';
import './styles/index.css';
import './styles/App.css';

import { I18nProvider } from '@lingui/react';
import { setupI18n } from '@lingui/core';
import catalogEn from './locales/en/messages.js';
import catalogFr from './locales/fr/messages.js';

const catalogList = {
  en: catalogEn,
  fr: catalogFr
};

export const i18n = setupI18n({
  language: 'en',
  catalogs: catalogList,
});

ReactDOM.render(
  <I18nProvider i18n={i18n} language="en" catalogs={catalogList}>
    <Router>
      <Switch>
        <Route path="/item/:corpus/:item" component={Item} />
        <Route path="/viewpoint/:id" component={Outliner} />
        <Route path="/" component={Portfolio} />
      </Switch>
    </Router>
  </I18nProvider>,
  document.getElementById('root')
);
