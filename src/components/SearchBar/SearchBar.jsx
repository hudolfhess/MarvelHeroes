import React, { Component } from 'react'
import HeroesGatewayMarvel from '../../gateways/HeroesGatewayMarvel'
import styles from './SearchBar.scss'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: this.props.defaultValue,
            timeOutHandler: null
        }

        this._handlerOnChangeInput = event => this.handlerOnchangeInput(event.target.value)
    }

    handlerOnchangeInput(search) {
        if (this.state.timeOutHandler !== null) {
            window.clearTimeout(this.state.timeOutHandler)
        }
        const timeOutHandler = window.setTimeout(search => {
            this.props.onChange(search)
        }, 300, search)

        this.setState({ timeOutHandler, search })
    }

    render() {
        return (
            <div className={styles.searchBar}>
                Search: <input type='text' onChange={this._handlerOnChangeInput} value={this.state.search} />
            </div>
        )
    }
}

export default SearchBar