import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../static/Layout';
import classes from './H_F.module.css'


// class Header extends Component {

//   render() {
//     return (<header>
//       <div>{"Nurse UP 市場価値の高い看護師になる"}</div>
//       <div>
//         <Link href="/top">
//         <button>Top Page</button>
//         </Link>
//         <Link href="/plan_table">
//         <button>メンターを探す</button>
//         </Link>
//         <Link href="/edit_my_profile">
//         <button>My Page</button>
//         </Link>
//         </div>
//     </header>);
//   }
// }

// export default Header;

const Header = () => {
  return <div className={classes.Header}>
    <header>
      <div className={classes.title}>{"Nurse UP 市場価値の高い看護師になる"}</div>
      <div>
        <Link href="/top">
        <button>Top Page</button>
        </Link>
        <Link href="/plan_table">
        <button>メンターを探す</button>
        </Link>
        <Link href="/edit_my_profile">
        <button>My Page</button>
        </Link>
        </div>
    </header>
  </div>
}
export default Header;