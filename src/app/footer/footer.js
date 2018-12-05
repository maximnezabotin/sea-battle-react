import React from 'react';
import './footer.css'

export default class Footer extends React.PureComponent {
  text = 'Maxim Nezabotin 2018 (c)';

  render() {
    return (<div className="footer">{this.text}</div>);
  }
}
