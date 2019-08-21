import React, {Component} from 'react' 
import { connect } from 'react-redux'
import { fetchShifts} from '../redux/actions/shiftsActions'
import { updateCovered } from '../redux/actions/shiftsActions'
import update from 'immutability-helper';

class ShiftsContainer extends Component {

	state = {
		shifts: [],
		points: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	}

	componentDidMount() {
		this.props.fetchShifts()
		

	}

	handleClick = (e, shift) => {
		e.preventDefault()
		shift.covered = !shift.covered
	    this.setState({covered: shift.covered})
	    this.props.updateCovered(shift)
	    this.props.fetchShifts()
	    console.log(`The shift says its - covered = ${shift.covered}`)
	    console.log(`The state says its - covered = ${this.state.covered}`)
	    
	  }

	  addPoints = (e, shift) => {
	
	  	const startingPoints = this.state.points[shift.id]
	  	
	  	let previousPoints = startingPoints
	  	let newPoints = previousPoints + 1
	  	
	  	const collection = this.state.points
	  	const index = shift.id
	  	const newCollection = update(collection, {[index]: {$set: newPoints}})
	  
	  	this.setState({
		  points: newCollection
		})
	  } 

	  subPoints = (e, shift) => {
	  	
	  	const startingPoints = this.state.points[shift.id]
	  	
	  	let previousPoints = startingPoints
	  	let newPoints = previousPoints - 1
	  	
	  	const collection = this.state.points
	  	const index = shift.id
	  	const newCollection = update(collection, {[index]: {$set: newPoints}})
	  	// this.state.points[shift.id] = newPoints
	  	// this.forceUpdate()
	  	this.setState({
		  points: newCollection
		})
	  } 

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
							<p >Points: {this.state.points[shift.id]}</p>
							{shift.covered === true ? <p>Covered: Covered</p> : <p>Covered: Not Covered</p>}
							<button onClick={ e => this.handleClick(e, shift)}>{shift.covered === true ? 'Drop Shift' : 'Pick Up'}</button>
							<br/><br/>
							<button onClick={ e => this.addPoints(e, shift)}>Add Point</button>
							<button onClick={ e => this.subPoints(e, shift)}>Subtract Point</button>
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
		shifts: state.shifts,
		points: state.points
	}
}


export default connect (mapStateToProps,  { fetchShifts , updateCovered})(ShiftsContainer)