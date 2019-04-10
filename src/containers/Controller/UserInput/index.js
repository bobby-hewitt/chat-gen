import React, { Component }from 'react'
import './style.scss'
import Color from './color'
import Emoji from './emoji'

export default class UserInput extends Component {
	render(){
		const { flow, index, followupIndex } = this.props
		return(
			<div className='userInputContainer'>
				{flow[index] && flow[index].type === 'response' && flow[index].selection === null &&
					<div className="responsesContainer">
						{flow[index].options.map((item, i) => {
							switch(item.type){
								case 'color':
								return <Color key={i} {...item} index={i} sendResponse={this.props.sendResponse}/>
								case 'emoji':
								return <Emoji key={i} sendResponse={this.props.sendResponse} index={i} {...item} />
								default:
								return <div key={i}/>
							}
						})}	
					</div>
				}
				
			</div>
		)
	}
}