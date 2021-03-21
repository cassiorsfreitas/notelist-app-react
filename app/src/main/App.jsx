/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'
import { SenseiProvider, themeDark as theme, } from "react-sensei";

import Logo from '../components/template/Logo'
import Nav from '../components/template/menu/Nav'
import Main from '../components/template/content/Main'
import Footer from '../components/template/Footer'


const App = () =>
  <SenseiProvider theme={theme}>

        <div className="app">
            <Logo/>
            <Nav/>
            <Main/>
            <Footer/>
        </div>

    </SenseiProvider>


export default App