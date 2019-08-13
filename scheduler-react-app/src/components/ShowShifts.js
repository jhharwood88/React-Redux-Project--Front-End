import React, { Component } from 'react';
import { connect } from 'react-redux';



class ShowShifts extends Component {

  handleClick = e => {
      // this.setState({ covered: true });
      console.log("test")
    };


  render() {

    return(
    <button onClick={this.handleClick}>Click me</button>
    )
  }
}

const mapStateToProps = (state) => {

  const shiftId = document.location.href.match(/\d+/g)[1];


  const shift = state.shifts.filter(shift => shift.id === shiftId);
  console.log(state.shifts)

  return {
    shift: shift

  }
 }

export default connect(mapStateToProps, null)(ShowShifts);