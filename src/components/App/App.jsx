import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../../reducers/reducers'
import ListHeroes from '../ListHeroes/ListHeroes'
import HeroesGatewayMarvel from '../../gateways/HeroesGatewayMarvel'

const store = createStore(reducers)
const heroesGateway = new HeroesGatewayMarvel()

const App = () => (
    <Provider store={store}>
        <ListHeroes heroesGateway={heroesGateway} />
    </Provider>
)

export default App