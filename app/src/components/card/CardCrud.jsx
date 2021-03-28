import './CardCrud.css'
import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../template/button/ButtonPrimary'
import ButtonDisabled from '../template/button/ButtonDisabled'


const baseUrl = 'http://localhost:3001/cards'
const initialState = {
    card: { title: '', description: '' },
    list: []
}

export default class CardCrud extends Component {
    
    state = {...initialState}

    componentWillMount () {
        axios(baseUrl).then ( resp => {
            this.setState({list: resp.data})
        })
    }

    clear () {
        this.setState({ card: initialState.card })
    }

    save () {
        const card = this.state.card
        const method = card.id ? 'put' : 'post'
        const url = card.id ? `${baseUrl}/${card.id}` : baseUrl
        axios[method](url, card)
            .then( resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ card: initialState.card, list})
            })
    }

    getUpdatedList (card) {
        const list = this.state.list.filter(c => c.id !== card.id)
        if (card) list.unshift(card)
        return list
    }

    updateField (event) {
        const card = {...this.state.card}
        card[event.target.name] = event.target.value
        this.setState({ card })
    }

    renderForm() {
        return(
            <div className="form">
                Create a new card
                <input type="text" className="form__input" name="title" value={this.state.card.title} onChange={e => this.updateField(e)} placeholder="Enter a title for this card..."/>
                <textarea rows="7" className="form__input" name="description" value={this.state.card.description} onChange={e => this.updateField(e)} placeholder="Add a more detailed description..."/>
                
                <div className="buttons">
                    <button className="form__btn" onClick={e => this.save(e)}><ButtonPrimary text="Save"/></button>
                    <Link to="/"><button className="form__btn" ><ButtonDisabled className="form__btn" text="Back"/></button></Link>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className="container">
                <div>
                    {this.renderForm()}
                </div>
            </div>
        )
    }
}