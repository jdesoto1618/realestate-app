import { Box } from "@chakra-ui/react";

const today = new Date();

const Footer = () => (
  <Box textAlign="center" color="gray.600" fontWeight="bold">
    &copy; {today.getFullYear()} Virtual Realtor
  </Box>
);

export default Footer;
