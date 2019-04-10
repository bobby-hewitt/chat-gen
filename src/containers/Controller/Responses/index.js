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
				{this.props.item.responseType === 'emoji' && 
					<p className="responseText">{item.options[item.selection] ? item.options[item.selection].emoji : ''}</p>
				}
				{this.props.item.responseType === 'color' && 
					<div className="colorMessageResponseContainer">
					<div className="colorMessageResponse" style={{background: item.options[item.selection].primary}}/>
					<div className="colorMessageResponse second" style={{background: item.options[item.selection].secondary}}/>
					</div>
				}
				
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