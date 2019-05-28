import React from 'react';
import './App.css';
import Head from './Packages/Header/header';
import Hero from './Packages/Hero/hero';
import Content from './Packages/Content/content';
import Works from './Packages/Works/works';
import Contacts from './Packages/Contacts/contacts';
import Footer from './Packages/Footer/footer';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Head />
      <Hero />
      <Content />
      <Works />     
      <Contacts />
      <Footer />
    </div>
  );
}
export default App;
