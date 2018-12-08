import React from 'react';
import './cell.css'

export default class Cell extends React.PureComponent {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    console.log(this.props.pos);
  }

  render() {
    return (<div className="cell"><div className="square" onClick={this.click}></div></div>);
  }
}
