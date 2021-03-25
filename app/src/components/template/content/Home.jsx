/* eslint-disable import/no-anonymous-default-export */
import './Home.css'
import React from 'react'
import Header from './Header'
import Card from './Card'

export default () =>
    <React.Fragment>
        <Header/>
        <main className="content">
            <div className="container">
                <a href="/" className="card"><Card/></a>
                <a href="/" className="card"><Card/></a>
                <a href="/" className="card"><Card/></a>
                <a href="/" className="card"><Card/></a>
                <a href="/" className="card"><Card/></a>
            </div>
        </main>
    </React.Fragment>



