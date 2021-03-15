import React, {Component} from 'react';
import { connect } from 'react-redux';
import firebase from "firebase";

class Account extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }

  constructor(props) {
    super(props);
// this.login_check();
  this.login_check = this.login_check.bind(this);
  }

// ログイン処理
// ユーザー認証を、firebaseAPIにある機能を使う。
// まず認証プロバイダーのオブジェクトを作成、それを使い認証メソッドを呼び出す。
// 認証プロバイダーは、認証方式の基本的な仕組みを管理するオブジェクト。
  login(){
// AuthProviderの作成：var 変数 = new firebase.auth.GoogleAuthProvider();
// Googleのユーザー認証を有効にするために、GoogleAuthProviderという認証プロバイダーを使う。
    let provider = new firebase.auth.GoogleAuthProvider();
    var self = this;
// ポップアップウィンドウによる認証を実行する。
// firebase.auth()メソッドは、認証オブジェクトを取り出すメソッド。
// signInWithPopup(provider)メソッドは、ポップアップウィンドウを用いてGoogle認証を行うもの。
// このメソッドは非同期で実行される。そのため、実際の処理と並行して処理が先に進まない様に
// 実行後の処理を用意する。それがthenメソッドである。
    firebase.auth().signInWithPopup(provider)
// signInWithPopupによるユーザー認証が完了すればthenメソッドで実行後の処理を行う。
// ログインしたユーザーの情報はresult.userで取り出せれる。
// このresult.userはオブジェクトであり、
// providerIDと、uid(ユーザーのID)、displayName(表示される名前)、email,phoneNumber
// の情報がまとめてある。GoogleアカウントはメールアドレスをID代わりに登録するため、
// emailの値がアカウントのIDに相当する。
    .then((result)=>{
// レデューサーによるディスパッチを送信する。
// 認証した後はdispatchを行い、UPDATE_USERというアクションを送信。
// ログインしたユーザー名、メールアドレス、loginにtrueという値をストアに設定している。
// ユーザー認証を利用したアプリでは、何かする度にログインしているかのチェックを行う。
      this.props.dispatch({
        type:'UPDATE_USER',
        value:{
// ストアにloginという値を用意し、それがtrueならばログイン中、
// falseならログアウト状態とする。
// このdispatchはストアにログイン状態の値を設定するためのもの。
          login:true,
          username: result.user.displayName,
          email: result.user.email,
          data:this.props.data,
          items:this.props.items
        }
      });
// ★ログイン時に発生するイベントの作成
// Accountコンポーネントを利用している他のコンポーネントの
// JSXで記述されたonLoginedと設定されたメソッドを呼び出している。
// つまり、このthis.props.onLogined();を呼び出すことで、
// このAccountコンポーネントを組み込んでいるコンポーネントの★ loginedメソッドを実行している。
      this.props.onLogined();
    });
  }

// ログアウト処理
  logout(){
    console.log("logout");
    firebase.auth().signOut();
    this.props.dispatch({
      type:'UPDATE_USER',
      value:{
        login:false,
        username: '(click here!)',
        email: '',
        data:[],
        items:[]
      }
    });
    this.props.onLogouted();
  }

// login,logoutのチェック
  login_check(){
    if (this.props.login == false){
      this.login();
    } else {
      this.logout();
    }
  }

// レンダリング
  render() {
    return (
      <p className="login">
        <span className="account"
        onClick={this.login_check}>
          LOGINED: {this.props.username}
        </span>
      </p>
    );
  }
}

Account = connect((state)=> state)(Account);
export default Account;