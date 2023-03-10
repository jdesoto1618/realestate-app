import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import headerStyles from "../styles/Header.module.css";
import footerStyles from "../styles/Footer.module.css";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate App</title>
    </Head>

    <Box maxWidth={1280} marginInline="auto">
      <header className={headerStyles.header}>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className={footerStyles.footer}>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
