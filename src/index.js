import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'balloon-css';

import Scroll from './components/ScrollComponent/Scroll';
import Home from './components/HomeComponent/Home';
import Header from './components/HeaderComponent/Header';
import About from './components/AboutComponent/About';
import Languages from './components/LanguagesComponents/Languages';
import Experience from './components/SotfUniExpComponents/Experience';
import Resource from './components/ResourceComponent/Resource';
import Contact from './components/ContactComponent/Contact';
import Footer from './components/FooterComponent/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Home></Home>
    <Scroll showBelow={250} />
    <Header></Header>
    <About></About>
    <Languages></Languages>
    <Experience></Experience>
    <Resource></Resource>
    <Contact></Contact>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
