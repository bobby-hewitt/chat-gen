import React, { Component } from 'react'
import './style.scss'

export default class Response extends Component {
	render(){
		const { item, index, question} = this.props
		return(
			<div>
			{question && 
				<p className="settingsQuestion">{question}</p>
			}
			<div className="responseMessage" >
				<div className="responseTextContainer">
				<p className="responseName">You</p>
				<p className="responseText">{item.options[item.selection] ? item.options[item.selection].emoji : ''}</p>
				</div>
				{!this.props.isSettings && 
					<div onClick={this.props.goBack.bind( this, index )}className="goBackIcon">
						<img src={require('assets/images/back.png')} />
					</div>
				}
				{this.props.isSettings && 
					<div className="rangeSlider">
						<input type="range" min="1" max="100"  class="slider" id="myRange" />
					</div>
				}
			</div>
				
			</div>
		)	
	}
}