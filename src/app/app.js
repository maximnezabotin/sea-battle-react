import React from 'react';

import Header from './header/header';
import Start from './start/start'
import Footer from './footer/footer';

import './app.css'

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="main">
        <Header />
        <Start />
        <Footer />
      </div>
    );
  }
}
