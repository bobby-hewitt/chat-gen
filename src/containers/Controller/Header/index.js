import React, { Component } from 'react'
import './style.scss'

export default class Header extends Component {
	render(){
		const { isMinimised, isSettings, toggleMinimise, toggleSettings } = this.props
		return(
			<div className="header">
				{isMinimised && 
					<div className="headerButton left" onClick={this.props.toggleMinimise.bind(this, false)}>
						<img src={require('assets/images/maximiseW.png')} />
					</div>
				}
				{!isMinimised && 
					<div className="headerButton left" onClick={this.props.toggleMinimise.bind(this, true)}>
						<img src={require('assets/images/minimiseW.png')} />
					</div>
				}
				{!isMinimised && !isSettings &&
					<div className="headerButton right" onClick={this.props.toggleSettings.bind(this, true)}>
						<img src={require('assets/images/settings.png')} />
					</div>
				}
				{!isMinimised && isSettings &&
					<div className="headerButton right" onClick={this.props.toggleSettings.bind(this, false)}>
						<img src={require('assets/images/messages.png')} />
					</div>
				}
			</div>
		)
	}
}