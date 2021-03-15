import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Top_page/Header';
// import Footer from '../components/Footer';
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
      <Header header={this.props.header}
      title={this.props.title} />
      {this.props.children}
      {/* <Footer footer="copyright SYODA-Tuyano."/> */}
    </div>);
  }


}
export default Layout;