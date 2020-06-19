import React, { Fragment } from "react";
import { Box } from "@chakra-ui/core";
import PropTypes from "prop-types";
import { Header, Footer } from "../ui/organisms";

const Layout = ({ children, ...restProps }) => {
  return (
    <Fragment {...restProps}>
      <Header />

      <Box as="main" className="main">
        {children}
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.shape({})
};
