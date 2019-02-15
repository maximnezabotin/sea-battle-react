import React from 'react';
import './button.css'

export default class Button extends React.PureComponent {
  render() {
    return (<button onClick={this.props.onClick}>{this.props.text}</button>);
  }
}
