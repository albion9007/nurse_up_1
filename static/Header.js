import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (<header>
      <div>{this.props.title}</div>
      <div>{this.props.header}</div>
    </header>);
  }
}

export default Header;