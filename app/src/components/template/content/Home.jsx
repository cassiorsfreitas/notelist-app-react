/* eslint-disable import/no-anonymous-default-export */
import './Home.css'
import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'

const baseUrl = 'http://localhost:3001/cards'
const initialState = {
    card: { title: '', description: '' },
    list: []
}

export default class Home extends Component {

    state = {...initialState}

    componentWillMount () {
        axios(baseUrl).then ( resp => {
            this.setState({list: resp.data})
        })
    }

    renderList() {
        return (
            <div className="content">
                <div className="container">
                    {this.renderRows()}
                </div>
            </div>
        )
    }

    renderRows() {
        return this.state.list.map(card => {
            return(
                <a key={card.id} href="/" className="card"><Card title={card.title}/></a>
            )
        })
    }

    load(card) {
        this.setState(card)
    }

    remove(card) {
        axios.delete(`${baseUrl}/${card.id}`).then(resp => {
            const list = this.getUpdatedList(null)
            this.setState(list)
        })
    }

    render () {
        console.log(this.state.list)
        return( 
            <React.Fragment>
                <Header created={this.state.list.length} running="4" closed="2"/>
                <main className="content">
                    <div className="">
                        {this.renderList()}
                    </div>
                </main>
            </React.Fragment>
        )
    }

}

