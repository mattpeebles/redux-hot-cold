import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect} from 'chai'

import GuessSection from './guess-section'

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessSection />);
	})

	it('should render feedback', () => {
		const feedback = "test feedback"
		const wrapper = shallow(<GuessSection feedback={feedback} />)

		expect(wrapper.contains(feedback)).to.equal(true)
	})

})