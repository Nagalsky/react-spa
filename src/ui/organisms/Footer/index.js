import React from "react";
import { Box } from "@chakra-ui/core";

const Footer = ({ ...restProps }) => {
  return (
    <Box as="footer" {...restProps}>
      <Box>i'm Footer</Box>
    </Box>
  );
};

export default Footer;
