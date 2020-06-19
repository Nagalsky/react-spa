import React from "react";
import { useTheme, Box } from "@chakra-ui/core";
import PropTypes from "prop-types";

const Container = ({ children, ...restProps }) => {
  const theme = useTheme();
  const width = theme.sizes.containers;

  return (
    <Box
      maxW={[
        width["screen-xs"],
        width["screen-sm"],
        width["screen-md"],
        width["screen-lg"],
        width["screen-xl"],
        width["screen-xxl"]
      ]}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default Container;

Container.defaultProps = {
  px: 4,
  mx: "auto",
  w: "100%"
};

Container.propTypes = {
  children: PropTypes.node
};
