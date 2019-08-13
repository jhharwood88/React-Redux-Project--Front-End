export const fetchShifts = () => dispatch => {
	return fetch("http://localhost:3001/schedules")
	.then(res => res.json())
	.then(shifts =>
		dispatch({type: "FETCH_SHIFTS_FINISHED", payload: shifts})
	)
}


// *** ASK ABOUT THIS AT 1:1
// export const fetchShift = () => dispatch => {
// 	return fetch({`http://localhost:3001/schedules/${this.id}`})
// 	.then(res => res.json())
// 	.then(shift =>
// 		dispatch({type: "FETCH_SHIFT_FINISHED", payload: shift})
// 	)
// }