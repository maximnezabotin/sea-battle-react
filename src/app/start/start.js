import React from 'react';
import './start.css'

export default class Start extends React.PureComponent {
  render() {
    return (<button className="btn" onClick={this.props.onClick}>Start</button>);
  }
}
