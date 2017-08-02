import md5 from 'md5'

class HeroesGatewayMarvel {
    constructor() {
        this.marvelUrl = 'https://gateway.marvel.com/v1/public/'
        this.heroesUri = 'characters'
        this.publicKey = process.env.MARVEL_PUBLIC_KEY
        this.privateKey = process.env.MARVEL_PRIVATE_KEY
    }

    getHeroesByName(name) {
        const timestamp = new Date().getTime()
        const hashKey = md5(timestamp + this.privateKey + this.publicKey)
        const queryStringKey = `nameStartsWith=${name}&apikey=${this.publicKey}&hash=${hashKey}&ts=${timestamp}`

        return fetch(`${this.marvelUrl}${this.heroesUri}?${queryStringKey}`)
            .then(data => (data.json()))
            .then(data => {
                return data.data.results.map(character => {
                    return {
                        id: character.id,
                        name: character.name,
                        image: `${character.thumbnail.path}.${character.thumbnail.extension}?${queryStringKey}`
                    }
                })
            })
    }
}

export default HeroesGatewayMarvel