import React from 'react';
import './mark.css';

export default class Mark extends React.PureComponent {
  render() {
    return (
      <div className={this.props.kill ? 'mark kill' : 'mark'}></div>
    )
  }
}
