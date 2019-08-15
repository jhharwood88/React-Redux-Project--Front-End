export const fetchShifts = () => dispatch => {
	return fetch("http://localhost:3001/schedules")
	.then(res => res.json())
	.then(shifts =>
		dispatch({type: "FETCH_SHIFTS_FINISHED", payload: shifts})
	)
}


export const updateCovered = shift => {
  return dispatch => {
  	
    fetch(`http://localhost:3001/schedules/${shift.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        shift: {
          covered: shift.covered,
          id: shift.id
        }
      })
    })
    .then(r => {return r.json()})
  }
}