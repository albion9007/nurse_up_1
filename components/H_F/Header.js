import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../static/Layout';
import classes from './H_F.module.css'

const Header = () => {
  return <div className={classes.Header}>
    <header>
      <div className={classes.title}>{"Nurse UP 市場価値の高い看護師になる"}</div>
      <div className={classes.menu_bar}>
        <Link href="/top">
        <button className={classes.menu}>Top Page</button>
        </Link>
        <Link href="/plan_table">
        <button className={classes.menu}>メンターを探す</button>
        </Link>
        <Link href="/edit_my_profile">
        <button className={classes.menu}>My Page</button>
        </Link>
        </div>
    </header>
  </div>
}
export default Header;