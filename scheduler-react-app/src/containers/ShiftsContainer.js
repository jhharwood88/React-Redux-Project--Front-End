import React, {Component} from 'react' 

export default class ShiftsContainer extends Component {

	state = {
		shifts: []
	}

	componentDidMount() {
		fetch("http://localhost:3001/schedules")
		.then(res => res.json())
		.then(shifts => this.setState( {shifts }))
	}

	render(){
		if(this.state.shifts.length === 0){
			return <h1> Loading </h1>
		}
		return (
			<div>
				<ul>
					{this.state.shifts.map(shift => (
						<div key={shift.id}>
							<p>Day: {shift.day} </p>
							<p>Time: {shift.time} </p>
							{shift.covered === true ? <p>Covered: Covered</p> : <p>Covered: Not Covered</p>}
							<br/>
						</div>
					))}
				</ul>
			</div>
		)
	}
}
