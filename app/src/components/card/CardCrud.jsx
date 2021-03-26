import './CardCrud.css'
import axios from 'axios'
import React, { Component } from 'react'


const baseUrl = 'http://localhost:3001/cards'
const initialState = {
    card: { title: '', description: '' },
    list: []
}

export default class CardCrud extends Component {
    
    state = {...initialState}

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
        list.unshift(list)
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
                <div className="row">
                    <div className="col-12 col-md-61">
                        <div className="form-group">
                            <h2>Title</h2>
                            <input type="text" className="form-control" name="title" value={this.state.card.title} onChange={e => this.updateField(e)} placeholder="Enter title..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-62">
                        <div className="form-group">
                            <h2>Description</h2>
                            <input type="text" className="form-control" name="description" value={this.state.card.description} onChange={e => this.updateField(e)} placeholder="Enter description..."/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex justify-content-end3">
                            <button className="btn" onClick={e => this.save(e)}>
                                Create
                            </button>

                            <button className="btn btn-secondary ml-2n" onClick={e => this.clear(e)}>
                                Clear
                            </button>
                        </div>
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