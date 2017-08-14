export const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess
})

export const NEW_GAME = 'NEW_GAME'
export const newGame = () => ({
	type: NEW_GAME,
	guesses: [],
	feedback: 'Make your guess!',
	correctAnswer: Math.floor(Math.random() * 100) + 1
})

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});