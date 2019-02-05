import React from 'react';
import './button.css'

export default class Button extends React.PureComponent {
  render() {
    return (<button className="btn" onClick={this.props.onClick}>{this.props.title}</button>);
  }
}
