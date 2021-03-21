import Link from 'next/link';
import Layout from '../static/Layout';
import Header from '../components/H_F/Header';
import Footer from '../components/H_F/Footer';
import Nayamiblock from '../components/Top_page/Nayamiblock';
import Business_block from '../components/Top_page/Business_block';
import Engineer from '../components/Top_page/Engineer';

import { Business } from '@material-ui/icons';


export default () =>(
  <Layout>
    <Header />
    <Nayamiblock />
    <Business_block />
    <Engineer />
    <Footer />
  </Layout>
);