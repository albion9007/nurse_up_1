import React, {Component} from 'react';
import { connect } from 'react-redux';

class Engineer extends Component {
  
  render(){
    return (
      <engineer>
        <div>{"メンターさん必見！"}</div>
        <div>{"PCで独自のカリキュラム作成お手伝いします！"}</div>
        <div>{"エンジニアがメンターーさんの要望をヒアリング、"}/</div>
        <div>{"PCベースでカリキュラムを"}</div>
        <div>{"閲覧できるように作成します"}</div>
        <div class="menta-serch-box">
          <button>{"エンジニアに相談する"}</button>
        </div>
      </engineer>);
  }
}

export default Engineer;