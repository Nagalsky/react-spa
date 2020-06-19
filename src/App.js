import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Global } from "@emotion/core";
import globalStyles from "../src/lib/global-styles";
import customTheme from "../src/theme/";
import Layout from "../src/layout";
import { Homepage, About, Contacts } from "../src/pages/";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />

      <Global styles={globalStyles} />

      <Layout>
        <Router>
          <Homepage path="/" />
          <About path="/about" />
          <Contacts path="/contacts" />
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
