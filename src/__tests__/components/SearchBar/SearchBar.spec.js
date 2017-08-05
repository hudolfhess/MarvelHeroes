import React from 'react'
import { render, shallow } from 'enzyme'
import SearchBar from '../../../components/SearchBar/SearchBar'

jest.useFakeTimers()

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

    it('Should call onChange prop when onChange from input is called', () => {
        const onChangeMock = jest.fn()
        const valueOnChange = 'changing value'

        const wrapper = shallow(<SearchBar onChange={onChangeMock} defaultValue='any value' />)
        wrapper.find('input').simulate('change', { target: { value: valueOnChange }})
        jest.runOnlyPendingTimers()

        expect(valueOnChange).toEqual(onChangeMock.mock.calls[0][0])
    })

    it('Should call only one time onChange with the last value prop when input is changed multiples time in sequence', () => {
        const onChangeMock = jest.fn()

        const wrapper = shallow(<SearchBar onChange={onChangeMock} defaultValue='any value' />)
        wrapper.find('input').simulate('change', { target: { value: 's' }})
        wrapper.find('input').simulate('change', { target: { value: 'sp' }})
        wrapper.find('input').simulate('change', { target: { value: 'spi' }})
        wrapper.find('input').simulate('change', { target: { value: 'spid' }})
        wrapper.find('input').simulate('change', { target: { value: 'spide' }})
        wrapper.find('input').simulate('change', { target: { value: 'spider' }})
        jest.runOnlyPendingTimers()

        expect(1).toEqual(onChangeMock.mock.calls.length)
        expect('spider').toEqual(onChangeMock.mock.calls[0][0])
    })
})
