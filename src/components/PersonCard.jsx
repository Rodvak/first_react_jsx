import React, { Component } from 'react'

export class PersonCard extends Component {
  render() {
    return (
      <div>
      <div>
        <h1>{this.props.firstName} {this.props.lastName} </h1>
        <p> {this.props.age} {this.props.hairColor} </p>
      </div>
      <div>
        <h1>{this.props.firstName2} {this.props.lastName2} </h1>
        <p> {this.props.age2} {this.props.hairColor2} </p>
      </div>
      <div>
        <h1>{this.props.firstName3} {this.props.lastName3} </h1>
        <p> {this.props.age3} {this.props.hairColor3} </p>
      </div>
      <div>
        <h1>{this.props.firstName4} {this.props.lastName4} </h1>
        <p> {this.props.age4} {this.props.hairColor4} </p>
      </div>
      </div>
    )
  }
}

export default PersonCard