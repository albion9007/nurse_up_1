import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import NayamiImage from '../../Images/NayamiImage';
import Layout from '../../static/Layout';
import classes from './Top.module.css'

const Nayamiblock = () => {
  return <div className={classes.Nayamiblock}>
    <nayami>
      <div className={classes.title}>{"一人で悩んでいませんか？"}</div>
      <NayamiImage />
        <ul>
          <li>{"ルートキープが上手く出来ない"}</li>
          <li>{"退院指導何をしたらいいか分からない"}</li>
          <li>{"電解質バランスがなかなか理解出来ない"}</li>
          <li>{"先輩とうまくコミュニケーションが取れない"}</li>
          <li>{"後輩指導に行き詰まっている"}</li>
        </ul>
      <div className={classes.title}>{"知識・スキル・経験のあるメンターさんがあなたをサポートします！"}</div>
      <div className={classes.position1}>
        <button className={classes.button1}>{"メンターさんを探して相談する"}</button>
      </div>
    </nayami>
  </div>
}
export default Nayamiblock;

// class Nayamiblock extends Component {
  
//   render(){
//     return (
//       <nayami>
//         <div>{"一人で悩んでいませんか？"}</div>
//         <ul>
//           <li>{"ルートキープが上手く出来ない"}</li>
//           <li>{"退院指導何をしたらいいか分からない"}</li>
//           <li>{"電解質バランスがなかなか理解出来ない"}</li>
//           <li>{"先輩とうまくコミュニケーションが取れない"}</li>
//           <li>{"後輩指導に行き詰まっている"}</li>
//         </ul>
//         <div>{"知識・スキル・経験がああるメンターさんがあなたをサポートします！"}</div>
//         <div class="menta-serch-box">
//           <button>{"メンターさんを探して相談する"}</button>
//         </div>
//       </nayami>);
//   }
// }

// export default Nayamiblock;