import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../SearchBar/SearchBar'
import styles from './ListHeroes.scss'

class ListHeroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: 'spider',
            heroes: []
        }

        this._handlerOnChangeSearch = search => this.handlerOnChangeSearch(search)
    }

    componentDidMount() {
        this.getHeroesByName(this.state.search)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
            this.getHeroesByName(this.state.search)
        }
    }

    getHeroesByName(search) {
        this.props.heroesGateway.getHeroesByName(search).then(heroes => {
            this.setState({ heroes })
        })
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

ListHeroes.propTypes = {
    heroesGateway: PropTypes.object.isRequired
}

export default ListHeroes
