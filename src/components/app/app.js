import React from 'react';
import Text from '../text/text';
import StartButton from '../../containers/start-button';
import Desk from '../desk/desk';
import './app.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {game: false};
    this.start = this.start.bind(this);
    this.menu = this.menu.bind(this);
  }

  start() {
    this.setState({game: true});
  }

  menu() {
    this.setState({game: false});
  }

  render() {
    return (
      <div className={'main ' + (this.state.game ? 'game' : 'menu')}>
        <Text type="title" text="Battleship" />
        <Desk /><StartButton text="Start" onClick={this.start} />
        <Text text={`Maxim Nezabotin ${new Date().getFullYear()} (c)`} />
      </div>
    );
  }
}
