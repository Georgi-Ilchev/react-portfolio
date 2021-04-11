import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Scroll from './components/ScrollComponent/Scroll';
import Home from './components/HomeComponent/Home';
import Header from './components/HeaderComponent/Header';
import About from './components/AboutComponent/About';
import Languages from './components/LanguagesComponents/Languages';
import Experience from './components/SotfUniExpComponents/Experience';
import Resource from './components/ResourceComponent/Resource';
import Contact from './components/ContactComponent/Contact';
import Footer from './components/FooterComponent/Footer';

import Type from './components/TypeComponent/Type';
import NotFound from './components/NotFoundComponent/NotFound';
import ShowAndHide from './/components/LanguagesComponents/showAndHide';


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
    {/* <NotFound></NotFound> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <Type />
//   </React.StrictMode>,
//   rootElement
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
