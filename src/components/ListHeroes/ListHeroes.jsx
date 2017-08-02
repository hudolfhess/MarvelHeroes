import React, { Component } from 'react'
import HeroesGatewayMarvel from '../../gateways/HeroesGatewayMarvel'

class ListHeroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            heroes: []
        }

        this.heroesGateway = new HeroesGatewayMarvel()
    }

    componentDidMount() {
        this.heroesGateway.getHeroesByName('iron man').then(heroes => {
            this.setState({ heroes })
        })
    }

    getHeroRow(hero) {
        return <li key={hero.id} className="heroRow">
            <img src={hero.image} width='130px' height='130px' />
            <p>{hero.name}</p>
        </li>
    }

    render() {
        return (
            <div>
                <h2>Heroes List</h2>
                <ul>
                    {this.state.heroes.map(hero => this.getHeroRow(hero))}
                </ul>
            </div>
        )
    }
}

export default ListHeroes