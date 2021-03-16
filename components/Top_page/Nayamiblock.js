import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

class Nayamiblock extends Component {
  
  render(){
    return (
      <nayami>
        <div>{"一人で悩んでいませんか？"}</div>
        <ul>
          <li>{"ルートキープが上手く出来ない"}</li>
          <li>{"退院指導何をしたらいいか分からない"}</li>
          <li>{"電解質バランスがなかなか理解出来ない"}</li>
          <li>{"先輩とうまくコミュニケーションが取れない"}</li>
          <li>{"後輩指導に行き詰まっている"}</li>
        </ul>
        <div>{"知識・スキル・経験がああるメンターさんがあなたをサポートします！"}</div>
        <div class="menta-serch-box">
          <button>{"メンターさんを探して相談する"}</button>
        </div>
      </nayami>);
  }
}

export default Nayamiblock;