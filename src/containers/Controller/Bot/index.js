import React, { Component } from 'react'
import './style.scss'

export default class BotMessage extends Component {
	render(){
		if (this.props.typing){
			return(
				<div className="question" >
					<p className="questionText">. . . </p>
				</div>
			)
		} else {
			return(
				<div className="question" >
					<p className="questionName">Artist</p>
					<p className="questionText">{this.props.text}</p>
				</div>
			)
		}
	}
}