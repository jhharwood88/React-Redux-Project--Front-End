import React, {Component} from 'react' 
import { connect } from 'react-redux'
import { fetchShifts} from '../redux/actions/shiftsActions'

class ShiftsContainer extends Component {

	state = {
		shifts: []
	}

	componentDidMount() {
		this.props.fetchShifts()

	}

	handleClick = e => {
	    // this.setState({ covered: true });
	    console.log(this.props.shifts)
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
							<button onClick={this.handleClick}>Pick Up</button>
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
//***ASK ABOUT THIS IN 1:1
// const mapDispatchToProps = dispatch => ({
//   changeCovered: covered => dispatch({type: 'CHANGE_COVERED', covered})
// })

export default connect (mapStateToProps, { fetchShifts })(ShiftsContainer)