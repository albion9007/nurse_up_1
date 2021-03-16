import React, { Component } from 'react';

class Footer extends Component{

  render(){
    return (<footer>
      <div>{this.props.title}</div>
      <div>{this.props.recruit}</div>
      <div>{this.props.qualification}</div>
      <div>{this.props.seminor}</div>
      <div>{this.props.questionnaire}</div>
    </footer>)
  }
}
export default Footer;