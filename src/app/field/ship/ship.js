import React from 'react';
import { store } from '../../store/store';
import './ship.css'

export default class Ship extends React.PureComponent {
  constructor(props) {
    super(props);
    var counter = 0;
    this.state = {kill: false};
    for (var pos of this.props.pos) {
      this.state[pos[0]+'_'+pos[1]] = false;
    }
    var unsub = store.subscribe(() => {
      var v = store.getState();
      if (this.state.hasOwnProperty(v)) {
        var ns = {};
        ns[v] = true;
        this.setState(ns);
        counter++;
        if (counter >= this.props.pos.length) {
          setTimeout(() => {
            this.setState({kill: true});
          }, 100);
          unsub();
        }
      }
    });
  }

  render() {
    var parts = [];
    for (var pos of this.props.pos) {
      parts.push(<div 
        key={pos[0]+'_'+pos[1]} 
        className={this.state[pos[0]+'_'+pos[1]] ? 'part' : ''} 
        style={{left: pos[0] * 10 + '%', top: pos[1] * 10 + '%'}}></div>);
    }
    return (<div className={this.state.kill ? 'ship' : ''}>{parts}</div>);
  }
}
