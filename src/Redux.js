import { createStore } from "redux";

const initialState = {
	loading: true
}

export const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state, { type, payload }) {
	switch (type) {
		case 'TOGGLE_LOADING':
			return {
				...state,
				loading: payload
			};
		default:
			return state;
	}
}
export const toggleLoading = (set_to) => ({
	type: 'TOGGLE_LOADING',
	payload: set_to
})