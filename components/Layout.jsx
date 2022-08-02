import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import NavTest from './NavTest';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box  m='auto'>
        <header>
          <NavTest/>
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
