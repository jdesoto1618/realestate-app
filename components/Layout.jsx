import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate App</title>
    </Head>

    <Box maxWidth={1280} marginInline="auto">
      <header>Navbar here</header>
      <main>{children}</main>
      <footer>Footer component</footer>
    </Box>
  </>
);

export default Layout;
