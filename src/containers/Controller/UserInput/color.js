import React, { Component } from 'react'
import './style.scss'

export default class Color extends Component {
	render(){
		return(
			<div className="color" style={{backgroundColor: this.props.color}}>

			</div>
		)
	}
}