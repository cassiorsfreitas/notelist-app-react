import './App.css'
import React from 'react'
import { SenseiProvider, themeDarkOrange as theme, } from "react-sensei";
import { BrowserRouter as Router} from "react-router-dom";

import Title from '../components/template/title/Logo'
import Routes from '../routes/Routes'
import Footer from '../components/template/footer/Footer'
import Button from '../components/template/button/ButtonAction'


const App = () =>
  <Router>
    <SenseiProvider theme={theme}>
            <div className="app">
              <Title/>
              <Routes/>
              <Footer/>
              <Button/>
            </div>
    </SenseiProvider>
  </Router>
  


export default App