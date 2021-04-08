import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

import ButtonPrimary from '../template/button/ButtonPrimary'
import ButtonDisabled from '../template/button/ButtonDisabled'
import ButtonSecondary from '../template/button/ButtonSecondary'

import './CardCrud.css'
import 'react-toastify/dist/ReactToastify.css';


const baseUrl = 'http://localhost:3001/cards'
const initialState = {
    card: { title: '', description: '' },
    list: []
}

toast.configure()

export default class CardCrud extends Component {
    
    id = this.props.match.params.id
    baseUrlCard = baseUrl + `/${this.id}`
        
    state = {...initialState}

    componentDidMount () {
        if (this.id) {
            axios(this.baseUrlCard).then( resp => {
                this.setState({card: resp.data})
            })
        }
        
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
                this.setState({ card: card, list})
                this.notify(200, 'Card created successfully!')
            })
    }

    load(card) {
        this.setState(card)
    }

    remove(card) {
        axios.delete(`${this.baseUrlCard}`).then(resp => {
            const list = this.getUpdatedList(card, false)
            this.setState({card: initialState.card, list})
            this.notify(300, 'Card removed successfully!')
        })
    }

    getUpdatedList (card, add = true) {
        const list = this.state.list.filter(c => c.id !== card.id)
        if (add) list.unshift(card)
        return list
    }

    updateField (event) {
        const card = {...this.state.card}
        card[event.target.name] = event.target.value
        this.setState({ card })
    }

    showTitle() {
        const title = this.id ? "Update the card" : "Create a new card"
        return title
    }

    notify = (code = 300, message) => {
        return (code === 200) ? toast.success(message) : toast.error(message) 
    }

    renderForm() {
        return(
            <div className="form">
                {this.showTitle()}
                <input type="text"
                    className="form__input"
                    name="title"
                    value={this.state.card.title}
                    onChange={e => this.updateField(e)}
                    placeholder="Enter a title for this card..."/>
                <textarea rows="7"
                    className="form__input"
                    name="description"
                    value={this.state.card.description}
                    onChange={e => this.updateField(e)}
                    placeholder="Add a more detailed description..."/>
                
                <div className="buttons">
                    <div className="form__btn">
                        <ButtonPrimary 
                        text="Save" 
                        onClick={e => this.save(e)}/>
                    </div>
                    <div className="form__btn">
                        <ButtonDisabled 
                        text="Delete" 
                        onClick={e => this.remove(e)}/>
                    </div>
                    <div className="form__btn">
                        <Link to="/" >
                            <ButtonSecondary LinkTo="/"
                            text="Back"/>
                        </Link>
                    </div>
                    
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