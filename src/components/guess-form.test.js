import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessForm from './guess-form'

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	})

	it('should fire onGuess callback when form is submitted', () => {
		const callback = jest.fn()
		const wrapper = mount(<GuessForm onGuess={callback} />)
		const guess = 26
		wrapper.find('input[type="text"]').node.value = guess
		wrapper.simulate('submit')
		expect(callback).toHaveBeenCalledWith(guess.toString())
	})

	it('should reset form after submission', () => {
		const wrapper = mount(<GuessForm />)
		const input = wrapper.find('input[type="text"]')
		input.node.value = 10
		wrapper.simulate('submit')
		expect(input.node.value).toEqual('')
	})
})