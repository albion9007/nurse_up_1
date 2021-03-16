import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

class Business_block extends Component {
  
  render(){
    return (
      <business>
        <div>{"病院・施設の出張看護指導行きます"}</div>
        <div>{"忙しくてスタッフへ指導をする時間がない"}</div>
        <div>{"輸液の見方"}</div>
        <div>{"接遇"}</div>
        <div>{"呼吸器の管理"}</div>
        <div>{"看護師のスキルアップ指導を出張して行います"}</div>
        <div class="menta-serch-box">
          <button>{"メンターさんに出張指導に来てもらう"}</button>
        </div>
      </business>);
  }
}

export default Business_block;