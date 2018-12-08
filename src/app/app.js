import React from 'react';

import Header from './header/header';
import Start from './start/start';
import Field from './field/field';
import Footer from './footer/footer';

import './app.css'

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isStarted: false};
    this.start = this.start.bind(this);
  }
  
  start() {
    this.setState({isStarted: true});
  }

  render() {
    return (
      <div className={this.state.isStarted ? 'main started' : 'main'}>
        <Header />
        {this.state.isStarted ? (<Field />) : (<Start onClick={this.start} />)}
        <Footer />
      </div>
    );
  }
}
