import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessCount from './guess-count'

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	})

    it('Renders the correct guess count', () => {
        const count = 26 ;
        const wrapper = shallow(<GuessCount count={count} />);
        expect(wrapper.text()).toEqual(`Guess #${count}!`);
	});
})