import React, {Component} from 'react' 
import { connect } from 'react-redux'
import { fetchShifts} from '../redux/actions/shiftsActions'
import { updateCovered } from '../redux/actions/shiftsActions'

class ShiftsContainer extends Component {

	state = {
		shifts: []
	}

	componentDidMount() {
		this.props.fetchShifts()
		

	}

	handleClick = (e, shift) => {
		e.preventDefault()
		console.log(`The state says its - covered = ${this.state.covered}`)
		shift.covered = !shift.covered
	    this.props.updateCovered(shift)
	    this.props.fetchShifts()
	    this.setState({covered: shift.covered})
	    console.log(`The shift says its - covered = ${shift.covered}`)
	    console.log(`The state says its - covered = ${this.state.covered}`)
	    
	  };    

	render(){
		if(this.props.shifts.length === 0){
			return <h1> Loading </h1>
		}

		return (
			<div>
				<ul>
					{this.props.shifts.map(shift => (

						<div  id={shift.covered === true ? "covered" : "notcovered" } key={shift.id}>
							<p>Day: {shift.day} </p>
							<p>Time: {shift.time} </p>
							{shift.covered === true ? <p>Covered: Covered</p> : <p>Covered: Not Covered</p>}
							<button onClick={ e => this.handleClick(e, shift)}>{shift.covered === true ? 'Drop Shift' : 'Pick Up'}</button>
							<br/><br/><br/>
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


export default connect (mapStateToProps,  { fetchShifts , updateCovered})(ShiftsContainer)