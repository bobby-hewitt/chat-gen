import React, { Component } from 'react'
import './style.scss'

export default class Color extends Component {
	render(){
		return(
			<div className="colorsContainer" onClick={this.props.sendResponse.bind(this, this.props.index)}>
				<div className="colorsBackground">
				<div className="color" style={{backgroundColor: this.props.primary}}>

				</div>
				<div className="color second" style={{backgroundColor: this.props.secondary}}>

				</div>
				</div>
			</div>
		)
	}
}