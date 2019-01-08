import React from 'react';
import './footer.css'

export default class Footer extends React.PureComponent {
  text = `Maxim Nezabotin ${new Date().getFullYear()} (c)`;

  render() {
    return (<h5 className="footer">{this.text}</h5>);
  }
}
