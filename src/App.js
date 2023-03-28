import React from 'react';
import Header from "./components/header";
import ContactUsPage from "./pages/contactUsPage";

import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "./theme";
import Footer from "./components/footer";


function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Header/>
          <ContactUsPage />
          <Footer/>
      </ThemeProvider>
  );
}

export default App;
