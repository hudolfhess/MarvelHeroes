import React from 'react'
import { render } from 'enzyme'
import ListHeroes from '../../../components/ListHeroes/ListHeroes'

describe('ListHeroes.jsx', () => {
    it('Should render ListHeroes without errors', () => {
        render(<ListHeroes />)
    })
})