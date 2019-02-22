import React from 'react';
import './text.css';

export default class Text extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {type: props.type == null ? 'simple' : props.type};
  }

  render() {
    return (
      <div className={this.state.type}>{this.props.text}</div>
    )
  }
}
