import React from 'react'
import { shallow } from 'enzyme'
import FormData from '../views/FormData/FormData'
import './setupTest.js'

const setUp = (props = {}) => {
    const component = shallow(<FormData  {...props}/>)
    return component
}

describe('form component', () => {

    let component
    beforeEach( () => {
        component = setUp()
    })

    it('It should  render tree inputs without errors', () => {
        const wrapper = component.find('TextField')
        expect(wrapper.length).toBe(3)
    })
    
})