import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect} from 'chai'

import GuessList from './guess-list'

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList guesses={[]}/>);
	})

	it('Should render an unordered list', () => {
		const guesses = []
		const wrapper = shallow(<GuessList guesses={guesses}/>)
		expect(wrapper.hasClass('guessBox')).to.equal(true)
	})

	it('Should render an unordered list with 3 items', () => {
		const guesses = [3, 26, 93]
		const wrapper = shallow(<GuessList guesses={guesses} />)
        expect(wrapper.find('ul').children()).to.have.length(3);
	})

	it('Should render a list of guesses', () => {
		const guesses = [3, 26, 93]
		const wrapper = shallow(<GuessList guesses={guesses} />)
		const items = wrapper.find('li')

		expect(items.length).to.equal(guesses.length)

		guesses.forEach((guess, index) => {
			expect(items.at(index).text()).to.equal(guess.toString())
		})
	})
})