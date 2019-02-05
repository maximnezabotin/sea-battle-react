import React from 'react';

import Header from './header/header';
import Button from './button/button';
import Field from './field/field';
import Footer from './footer/footer';

import './app.css'

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isStarted: false};
    this.start = this.start.bind(this);
    this.menu = this.menu.bind(this);
  }
  
  start() {
    this.setState({isStarted: true});
  }

  menu() {
    this.setState({isStarted: false});
  }

  render() {
    return (
      <div className={this.state.isStarted ? 'main started' : 'main'}>
        <Header />
        {this.state.isStarted ? (<Field onClick={this.menu} />) : (<Button onClick={this.start} title="Start" />)}
        <Footer />
      </div>
    );
  }
}
