
import React from 'react';
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignUp from './components/pages/Sign-up';
import QuizMainPage from './components/pages/QuizMainPage';
import Features from './components/pages/Features';
import HowWorks from './components/pages/HowWorks';
import DemoGuideVideo from './components/pages/DemoGuideVideo';
const App = () =>  {
    return (
      <>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/"  element = {<Home/>} />
          <Route exact path = "/howitworks"  element = {<HowWorks/>} />
          <Route exact path = "/features"  element = {<Features/>} />
          <Route exact path = "/about"  element = {<About/>} />
          <Route exact path = "/signup"  element = {<SignUp/>} />
          <Route exact path = "/quizmainpage"  element = {<QuizMainPage/>} />
          <Route exact path = "/demo"  element = {<DemoGuideVideo/>} />

        </Routes>
       
        </Router>

        
      </>
    );
  
}
export default App;


