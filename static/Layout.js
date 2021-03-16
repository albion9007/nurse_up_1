import React, { Component } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import style from '../static/Style';


class Layout extends Component {

  render() {
    return (<div>
{/* <title>と<meta>を使い、タイトル、文字セット、スマートフォン向けのビューポートの設定が用意。
こうしたヘッダー情報は、Headコンポーネントお使う事で組み込める。 */}
      <Head>
{/* <title>によるタイトルの設定がちゃんとなされている。 */}
        <title>{this.props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport'
          content='initial-scale=1.0, width=device-width' />
      </Head>
      {style}
      <Header title="Nurse UP 市場価値の高い看護師になる"
       header="" />
      {this.props.children}
      <Footer title="Nurse UP 市場価値の高い看護師になる" recruit="看護師の転職サイト"
       qualification="資格を取る" seminor="セミナー案内" questionnaire="アンケート"/>
    </div>);
  }


}
export default Layout;