import * as actions from "../actions"

const initialState = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            showInfoModal: false
        };


export const hotColdReducer = (state=initialState, action) => {
	
	if (action.type === actions.MAKE_GUESS){
        const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });

            return state;
        }

        console.log(state.guesses)
        console.log(state.guesses.indexOf(guess))

        if(state.guesses.indexOf(guess) === -1){

	        const difference = Math.abs(guess - state.correctAnswer);

	        let feedback;
	        if (difference >= 50) {
	            feedback = 'You\'re Ice Cold...';
	        }
	        else if (difference >= 30) {
	            feedback = 'You\'re Cold...';
	        }
	        else if (difference >= 10) {
	            feedback = 'You\'re Warm';
	        }
	        else if (difference >= 1) {
	            feedback = 'You\'re Hot!';
	        }
	        else {
	            feedback = 'You got it!';
	        }

	        state = Object.assign({}, state, {
	            feedback,
	            guesses: state.guesses.concat(guess)
	        });

			return state;
        }
	}

	if(action.type === actions.NEW_GAME){
		return Object.assign({}, state, {
			guesses: action.guesses,
			feedback: action.feedback,
			correctAnswer: action.correctAnswer
		})
	}

	if (action.type === actions.TOGGLE_INFO_MODAL){
		return Object.assign({}, state, {
			showInfoModal: !state.showInfoModal
		})
	}

	return state
}