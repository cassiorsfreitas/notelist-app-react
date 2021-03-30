import './ViewCard.css'
import React, { Component } from 'react'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/cards'
const initialState = {
    card: { title: '', description: '' },
}

export default class ViewCard extends Component{
    
    id = this.props.match.params.id
    baseUrlCard = baseUrl + `/${this.id}`
    state = {...initialState}

    componentWillMount () {
        axios(this.baseUrlCard).then ( resp => {
            this.setState({card: resp.data})
        })
    }

    render () {
        return (
            <div className="container">
                <div className="form">
                <input type="text" value={this.state.card.title} className="form__input" name="title"></input>
                <textarea rows="7" value={this.state.card.description} className="form__input" name="description" />
            </div>
            </div>
        )
    }
}