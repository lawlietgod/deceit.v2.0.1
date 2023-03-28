import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer, MainPage, MidSection, Navbar, SectionOne, SectionTwo, SignUp } from './components/index';

const App = () => {

  window.history.scrollRestoration = 'manual';

  return (
    <BrowserRouter>
        <Navbar />
        <MainPage />
        <SectionOne />
        <MidSection />
        <SectionTwo />
        <SignUp />
        <Footer />
    </BrowserRouter>
  )
}

export default App