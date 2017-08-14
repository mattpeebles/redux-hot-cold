import React from 'react'
import {shallow, mount} from 'enzyme'

import Header from './header'

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	})

	it('should intially render header without infomodel', () => {
		const wrapper = shallow(<Header />)
		expect(wrapper.find('InfoModal').exists()).toEqual(false)
	})

	it('should show InfoModal on toggle', () => {
		const wrapper = shallow(<Header />)
		wrapper.instance().toggleInfoModal(true)
		expect(wrapper.find('InfoModal').exists()).toEqual(true)
	})
})