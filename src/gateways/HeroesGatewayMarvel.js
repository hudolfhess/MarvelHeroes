class HeroesGatewayMarvel {
    getHeroesByName(name) {
        return Promise.resolve([
            {
                id: 1,
                name: 'Iron Man',
                image: '--'
            },
            {
                id: 2,
                name: 'Spider Man',
                image: '--'
            },
            {
                id: 3,
                name: 'Capitain America',
                image: '--'
            },
            {
                id: 4,
                name: 'Thor',
                image: '--'
            }
        ])
    }
}

export default HeroesGatewayMarvel