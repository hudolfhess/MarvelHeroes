import React from 'react'
import { render } from 'enzyme'
import App from '../../../components/App/App'

describe('App.jsx', () => {
    it('Should render App without errors', () => {
        render(<App />)
    })
})