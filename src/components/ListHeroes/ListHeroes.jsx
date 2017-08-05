import React, { Component } from 'react'
import HeroesGatewayMarvel from '../../gateways/HeroesGatewayMarvel'
import SearchBar from '../SearchBar/SearchBar'
import styles from './ListHeroes.scss'

class ListHeroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: 'spider',
            heroes: []
        }

        this.heroesGateway = new HeroesGatewayMarvel()
        this._handlerOnChangeSearch = search => this.handlerOnChangeSearch(search)
    }

    componentDidMount() {
        this.heroesGateway.getHeroesByName(this.state.search).then(heroes => {
            this.setState({ heroes })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
            this.heroesGateway.getHeroesByName(this.state.search).then(heroes => {
                this.setState({ heroes })
            })
        }
    }

    handlerOnChangeSearch(search) {
        this.setState({ search })
    }

    getHeroRow(hero) {
        return <div key={hero.id} className={styles.heroRow}>
            <div className={styles.heroImage}><img src={hero.image} /></div>
            <div className={styles.heroInfo}>
                <p>{hero.name}</p>
            </div>
        </div>
    }

    render() {
        return (
            <div className={styles.container}>
                <h2>Heroes List</h2>
                 <SearchBar onChange={this._handlerOnChangeSearch} defaultValue={this.state.search} /> 
                <div className={styles.listHeroes}>
                    {this.state.heroes.map(hero => this.getHeroRow(hero))}
                </div>
            </div>
        )
    }
}

export default ListHeroes