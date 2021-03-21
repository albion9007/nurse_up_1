import React, { Component } from 'react';
import Layout from '../../static/Layout';
import classes from './H_F.module.css'


const Footer = () => {
  return <div className={classes.Footer}>
    <footer>
      <div>
        <div className={classes.logos}>
          <div className={classes.logo1}>{"Nurse UP"}</div>
          <div className={classes.logo2}>{"市場価値の高い看護師になる"}</div>
        </div>
        <div>{"看護師の転職サイト"}</div>
        <div>{"資格を取る"}</div>
        <div>{"セミナー案内"}</div>
        <div>{"アンケート"}</div>
      </div>
    </footer>
  </div>
}
export default Footer;