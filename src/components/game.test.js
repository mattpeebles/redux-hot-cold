import React from 'react'
import {shallow, mount} from 'enzyme'

import Game from './game'

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	})

	it('Can start a new game', () => {
		const wrapper = shallow(<Game />)

		wrapper.setState({
            guesses: [6, 20, 4, 81, 21],
            feedback: 'Yolo',
            correctAnswer: 2
        });

        wrapper.instance().newGame()

        expect(wrapper.state('guesses')).toEqual([])
        expect(wrapper.state('feedback')).toEqual('Make your guess!')
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0)
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100)
	})

	it('Should render four components: Header, GuessSection, GuessCount, GuessList', () => {
		const wrapper = shallow(<Game />)

		expect(wrapper.find('Header').length).toEqual(1)
		expect(wrapper.find('GuessSection').length).toEqual(1)
		expect(wrapper.find('GuessCount').length).toEqual(1)
		expect(wrapper.find('GuessList').length).toEqual(1)

	})

	it('Can make guesses and provide feedback', () => {
		const wrapper = shallow(<Game />)

		wrapper.setState({
			correctAnswer: 100
		})

		wrapper.instance().guess(25)
		expect(wrapper.state('guesses')).toEqual([25])
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')

		wrapper.instance().guess(51)
		expect(wrapper.state('guesses')).toEqual([25, 51])
		expect(wrapper.state('feedback')).toEqual('You\'re Cold...')

		wrapper.instance().guess(80)
		expect(wrapper.state('guesses')).toEqual([25, 51, 80])
		expect(wrapper.state('feedback')).toEqual('You\'re Warm')

		wrapper.instance().guess(91)
		expect(wrapper.state('guesses')).toEqual([25, 51, 80, 91])
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!')

		wrapper.instance().guess(100)
		expect(wrapper.state('guesses')).toEqual([25, 51, 80, 91, 100])
		expect(wrapper.state('feedback')).toEqual('You got it!')
	})
})