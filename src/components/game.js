import React from 'react';
import {connect} from 'react-redux'


import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export class Game extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <GuessSection />
                <GuessCount />
                <GuessList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer
})

export default connect(mapStateToProps)(Game)

