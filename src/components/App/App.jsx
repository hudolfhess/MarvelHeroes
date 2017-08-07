import React, { Component } from 'react'
import ListHeroes from '../ListHeroes/ListHeroes'
import HeroesGatewayMarvel from '../../gateways/HeroesGatewayMarvel'

class App extends Component {
    render() {
        const heroesGateway = new HeroesGatewayMarvel()
        return (
            <ListHeroes heroesGateway={heroesGateway} />
        )
    }
}

export default App