import React from 'react'
import { render, shallow } from 'enzyme'
import SearchBar from '../../../components/SearchBar/SearchBar'

describe('SearchBar.jsx', () => {
    it('Should render SearchBar without errors', () => {
        render(<SearchBar onChange={() => {}} defaultValue='default value' />)
    })

    it('Should init component with defaultValue prop on search state', () => {
        const defaultValueProperty = 'default value'

        const wrapper = shallow(<SearchBar onChange={() => {}} defaultValue={defaultValueProperty} />)

        expect(defaultValueProperty).toEqual(wrapper.state().search)
    })

    it('Should value input be equal the search state value', () => {
        const defaultValueProperty = 'default value'
        const changingValue = 'changing value'

        const wrapper = shallow(<SearchBar onChange={() => {}} defaultValue={defaultValueProperty} />)
        wrapper.setState({ search: changingValue })

        expect(changingValue).toEqual(wrapper.find('input').props().value)
    })
})
