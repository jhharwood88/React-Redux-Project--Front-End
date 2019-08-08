export const fetchShifts = () => dispatch => {
	return fetch("http://localhost:3001/schedules")
	.then(res => res.json())
	.then(shifts =>
		dispatch({type: "FETCH_SHIFTS_FINISHED", payload: shifts})
	)
}