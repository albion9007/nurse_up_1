import Link from 'next/link';
import Layout from '../static/Layout';
import Header from '../static/Header';
import Footer from '../static/Footer';
import Nayamiblock from '../components/Top_page/Nayamiblock';
import Business_block from '../components/Top_page/Business_block';
import Engineer from '../components/Top_page/Engineer';

import { Business } from '@material-ui/icons';


export default () =>(
  <Layout>
    <Nayamiblock />
    <Business_block />
    <Engineer />
    {/* <Address />
    <hr/>
    <div>
      <Link href="/address_add">
        <button>add</button>
      </Link>
    </div> */}
  </Layout>
);