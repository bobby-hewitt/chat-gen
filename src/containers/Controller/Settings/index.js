import React, { Component } from 'react'
import './style.scss'
import Response from '../Responses'
import Bot from '../Bot'

export default class Settings extends Component {
	render(){
		const { flow } = this.props
		return(
			<div className="settingsContainer">
				{flow.map((item, i) => {
					if (item.type === 'response' && item.selection !== null){
						return(
							<Response isSettings item={item} question={flow[i-1].text}key={i}/>
						)
					} else {
						return <div key={i} />
					}
				})}
			</div>
		)
	}
}