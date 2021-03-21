import React, { Component } from 'react';
import Layout from '../../static/Layout';
import classes from './H_F.module.css'

// class Footer extends Component{

//   render(){
//     return (<footer>
//       <div>{"Nurse UP 市場価値の高い看護師になる"}</div>
//       <div>{"看護師の転職サイト"}</div>
//       <div>{"資格を取る"}</div>
//       <div>{"セミナー案内"}</div>
//       <div>{"アンケート"}</div>
//     </footer>)
//   }
// }
// export default Footer;

const Footer = () => {
  return <div className={classes.Footer}>
    <footer>
      <div className={classes.title}>{"Nurse UP 市場価値の高い看護師になる"}</div>
      <div>
        <div>{"Nurse UP 市場価値の高い看護師になる"}</div>
        <div>{"看護師の転職サイト"}</div>
        <div>{"資格を取る"}</div>
        <div>{"セミナー案内"}</div>
        <div>{"アンケート"}</div>
      </div>
    </footer>
  </div>
}
export default Footer;