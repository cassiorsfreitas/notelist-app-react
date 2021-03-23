/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'
import { SenseiProvider, themeDarkOrange as theme, } from "react-sensei";

import Title from '../components/template/title/Logo'
import Main from '../components/template/content/Main'
import Footer from '../components/template/footer/Footer'


const App = () =>
  <SenseiProvider theme={theme}>

        <div className="app">
            <Title/>
            <Main/>
            <Footer/>
        </div>

    </SenseiProvider>


export default App