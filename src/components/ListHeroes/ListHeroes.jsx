import React, { Component } from 'react'
import HeroesGatewayMarvel from '../../gateways/HeroesGatewayMarvel'
import styles from './ListHeroes.scss'

class ListHeroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: 'spider',
            heroes: []
        }

        this.heroesGateway = new HeroesGatewayMarvel()
    }

    componentDidMount() {
        this.heroesGateway.getHeroesByName(this.state.search).then(heroes => {
            console.log(heroes)
            this.setState({ heroes })
        })
    }

    getHeroRow(hero) {
        return <div key={hero.id} className={styles.heroRow}>
            <div className={styles.heroImage}><img src={hero.image} /></div>
            <div className={styles.heroInfo}>
                <p>{hero.name}</p>
                <p>{hero.wiki ? <a href={hero.wiki} target='_blank'>Wiki (Marvel)</a> : null}</p>
                <div className={styles.heroStories}>
                    <h4>Stories:</h4>
                    {hero.stories.length > 0 ?
                    hero.stories.map(story => (
                        <span> - {story.name}</span> 
                    )) :
                    'nothing found...'}
                </div>
            </div>
        </div>
    }

    render() {
        return (
            <div className={styles.container}>
                <h2>Heroes List</h2>
                <div>
                    Searching by: {this.state.search}
                </div>
                <div className={styles.listHeroes}>
                    {this.state.heroes.map(hero => this.getHeroRow(hero))}
                </div>
            </div>
        )
    }
}

export default ListHeroes