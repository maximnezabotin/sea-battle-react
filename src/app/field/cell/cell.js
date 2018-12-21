import React from 'react';
import './cell.css'

export default class Cell extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isActive: false};
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({isActive: true});
    console.log(this.props.pos);
  }

  render() {
    return (<div className="cell"><div className={this.state.isActive ? 'square active' : 'square'} onClick={this.click}></div></div>);
  }
}
