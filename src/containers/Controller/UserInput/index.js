import React, { Component }from 'react'
import './style.scss'
import Color from './color'

export default class UserInput extends Component {
	render(){
		const { flow, index, followupIndex } = this.props
		return(
			<div className='userInputContainer'>
				{flow[index] && flow[index].type === 'response' && flow[index].selection === null &&
					<div className="responsesContainer">
						{flow[index].options.map((item, i) => {
							return (
								<div onClick={this.props.sendResponse.bind(this, i)}key={i}className="response">
									<p>{item.emoji}</p>
								</div>
							)
						})}	
					</div>
				}
				{flow[index] && flow[index].type === 'response' && flow[index].options[flow[index].selection] && flow[index].options[flow[index].selection].followups[followupIndex] && flow[index].options[flow[index].selection].followups[followupIndex].type === 'response' &&
					<div className="responsesContainer">
						{flow[index].options[flow[index].selection].followups[followupIndex].options.map((item, i) => {
							switch(item.type){
								case 'color':
								return <Color key={i} color={item.value}/>
								default:
								return <div key={i}/>
							}
							// return(
							// 	<Color color={item.value} />
							// )

							
						})}	
					</div>
				}
			</div>
		)
	}
}