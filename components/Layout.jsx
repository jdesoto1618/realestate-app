import Head from "next/head";
import { Box } from "@chakra-ui/react";
import headerStyles from "../styles/Header.module.css";
import footerStyles from "../styles/Footer.module.css";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate App</title>
    </Head>

    <Box maxWidth={1280} marginInline="auto">
      <header className={headerStyles.header}>Navbar here</header>
      <main>{children}</main>
      <footer className={footerStyles.footer}>Footer component</footer>
    </Box>
  </>
);

export default Layout;
