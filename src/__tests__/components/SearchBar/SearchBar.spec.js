import React from 'react'
import { render } from 'enzyme'
import SearchBar from '../../../components/SearchBar/SearchBar'

describe('SearchBar.jsx', () => {
    it('Should render SearchBar without errors', () => {
        render(<SearchBar onChange={() => {}} defaultValue='default value' />)
    })
})
