import React from 'react'
import {shallow, mount} from 'enzyme'

import TopNav from './top-nav'

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	})

	it('renders two li elements', () => {
		const wrapper = shallow(<TopNav />)

		expect(wrapper.find('ul').children().length).toEqual(2)
	})

	it('fires onInfo when what is clicked', () => {
		const callback = jest.fn()
		const wrapper = shallow(<TopNav onInfo={callback}/>)

		wrapper.find('.what').simulate('click', {preventDefault() {}})
		expect(callback).toHaveBeenCalled()
	})

	it('fires newGame when new game is clicked', () => {
		const callback =jest.fn()
		const wrapper = shallow(<TopNav onNewGame={callback}/>)

		wrapper.find('.new').simulate('click', {preventDefault() {}})

		expect(callback).toHaveBeenCalled()
	})
})