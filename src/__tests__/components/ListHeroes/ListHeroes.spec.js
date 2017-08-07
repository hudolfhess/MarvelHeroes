import React from 'react'
import { mount, shallow } from 'enzyme'
import ListHeroes from '../../../components/ListHeroes/ListHeroes'
import SearchBar from '../../../components/SearchBar/SearchBar'

jest.useFakeTimers()

describe('ListHeroes.jsx', () => {
    const resultGetHeroesByName = [
        {
            id: 1,
            name: 'Iron man',
            thumbnail: {
                path: 'http://iron-man/',
                extension: 'png'
            }
        },
        {
            id: 2,
            name: 'Captain America',
            thumbnail: {
                path: 'http://captain-america/',
                extension: 'png'
            }
        }
    ]

    const heroesGatewayMock = {
        getHeroesByName: jest.fn().mockImplementation(() => (
            Promise.resolve(resultGetHeroesByName))
        )
    }

    beforeEach(() => {
        heroesGatewayMock.getHeroesByName.mockClear()
    })

    it('Should render ListHeroes with SearchBar without errors', () => {
        const wrapper = shallow(<ListHeroes heroesGateway={heroesGatewayMock} />)

        expect(wrapper.find(SearchBar)).toHaveLength(1)
    })

    it('Should call getHeroesByName with initial search state and save on state when component was rendered', () => {
        const wrapper = mount(<ListHeroes heroesGateway={heroesGatewayMock} />)

        expect(1).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)
        expect(wrapper.state().search).toEqual(heroesGatewayMock.getHeroesByName.mock.calls[0][0])
        return heroesGatewayMock.getHeroesByName().then(() => {
            expect(resultGetHeroesByName).toEqual(wrapper.state().heroes)
        })
    })

    it('Should call getHeroesByName when search state was updated', () => {
        const searchValue = 'different-value'
        const wrapper = shallow(<ListHeroes heroesGateway={heroesGatewayMock} />)

        wrapper.setState({ search: searchValue })

        expect(1).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)
        expect(searchValue).toEqual(heroesGatewayMock.getHeroesByName.mock.calls[0][0])
    })

    it('Should update search state when input on SearchBar was changed', () => {
        const searchValue = 'different-value'
        const wrapper = mount(<ListHeroes heroesGateway={heroesGatewayMock} />)

        wrapper.find(SearchBar).find('input').simulate('change', { target: { value: searchValue }})
        jest.runOnlyPendingTimers()

        expect(2).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)
        expect(searchValue).toEqual(heroesGatewayMock.getHeroesByName.mock.calls[1][0])
    })

    it('Should render heroes in respectives rows', () => {
        const wrapper = mount(<ListHeroes heroesGateway={heroesGatewayMock} />)

        wrapper.setState({ heroes: resultGetHeroesByName })

        expect(wrapper.find('.heroRow')).toHaveLength(resultGetHeroesByName.length)
    })
})