import React from 'react';
import { store } from '../../store/store';
import './cell.css'

export default class Cell extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isActive: false};
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({isActive: true});
    store.dispatch({type: 'FIRE', x: this.props.pos.x, y: this.props.pos.y});
  }

  render() {
    return (<div 
      className="cell">
      <div className={this.state.isActive ? 'square active' : 'square'} 
      onClick={this.click}></div></div>);
  }
}
