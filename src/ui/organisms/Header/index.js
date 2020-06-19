import React from "react";
import { Link as LinkRouter } from "@reach/router";
import styled from "@emotion/styled";
import { Box, Link, Flex } from "@chakra-ui/core";
import { Container } from "../../atoms/";
import theme from "../../../theme";

const StyledNavLink = styled(Link)`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  &[aria-current="page"] {
    color: ${theme.colors.primary[500]};
  }
`;

const Header = ({ ...restProps }) => {
  return (
    <Box as="header" {...restProps}>
      <Box display={{ md: "flex" }} as={Container} align="center" justifyContent="space-between">
        <Link as={LinkRouter} to="/" fontFamily="baseBold">
          Your logo
        </Link>

        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          <StyledNavLink as={LinkRouter} to="/">
            Homepage
          </StyledNavLink>
          <StyledNavLink as={LinkRouter} to="/about" ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }}>
            About us
          </StyledNavLink>
          <StyledNavLink as={LinkRouter} to="/contacts" ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }}>
            Contacts
          </StyledNavLink>
        </Flex>
      </Box>
    </Box>
  );
};

Header.defaultProps = {
  bg: "natural.50",
  py: 4,
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "natural.100"
};

export default Header;
