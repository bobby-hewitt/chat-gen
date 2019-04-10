import React, { Component } from 'react'
import './style.scss'

export default class Emoji extends Component {
	render(){
		return(
			<div onClick={this.props.sendResponse.bind(this, this.props.index)} className="response">
				<p>{this.props.emoji}</p>
			</div>
		)
	}
}