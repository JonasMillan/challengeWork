import React from 'react'
import { shallow } from 'enzyme'
import FormData from '../views/FormData/FormData'
import './setupTest.js'

describe('form component', () => {

    it('It should render without errors', () => {
        const component = shallow(<FormData />)
        console.log(component.debug())
    })
})