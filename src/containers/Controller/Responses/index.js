
import React, { Component } from 'react'
import './style.scss'
import Emoji from './emoji'
import Color from './color'

export default class Response extends Component {
	render(){
		return(
			<div className="reponseOuterContainer">
				{this.props.item.responseType === 'color' && 
					<Color {...this.props}/>
				}
				{this.props.item.responseType === 'emoji' &&
					<Emoji {...this.props}/>
				}
			</div>
		)
	}
}