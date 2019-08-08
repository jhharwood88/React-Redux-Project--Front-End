import React, {Component} from 'react' 
import { connect } from 'react-redux'
import { fetchShifts} from '../redux/actions/shiftsActions'

class ShiftsContainer extends Component {

	state = {
		shifts: []
	}

	componentDidMount() {
		// fetch("http://localhost:3001/schedules")
		// .then(res => res.json())
		// .then(shifts => this.setState( {shifts }))
		this.props.fetchShifts()
	}

	render(){
		if(this.props.shifts.length === 0){
			return <h1> Loading </h1>
		}
		return (
			<div>
				<ul>
					{this.props.shifts.map(shift => (
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

const mapStateToProps = state => {
	return {
		shifts: state.shifts
	}
}

export default connect (mapStateToProps, { fetchShifts })(ShiftsContainer)