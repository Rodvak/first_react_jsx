import React, { Component } from 'react'

class PersonCard extends Component {

  // Declare constructor 
  constructor(props){
    super(props) // Gives us all the functinality of the default CONSTRUCTOR that comes with component.
    this.state = {
      ...props,
    }
  }

  sumOne = () => {
    this.setState({age: this.state.age + 1})
  }

  render() {
    return (
      <div>
        <h1>{this.props.firstName} {this.props.lastName}</h1>
        <p> Age: {this.state.age}</p>
        <p> Hair Color: {this.props.hairColor}</p>
        <button onClick={this.sumOne}>Birthday Button for {this.props.firstName}</button>
      </div>
    )
  }
}

export default PersonCard



// render() {
//   const { firstName, lastName, age, hairColor } = this.state
//   return (
//   <div>
//     <h1>{firstName} {lastName}</h1>
//     <p> Age: {age}</p>
//     <p> Hair Color: {hairColor}</p>
//     <button onClick={this.sumOne}>Birthday Button for {firstName}</button>
//   </div>
//   )
// }
// }
