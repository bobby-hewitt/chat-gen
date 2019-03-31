import React, { Component } from 'react'
import BotMessage from '../Bot'
import Responses from '../Responses'
import './style.scss'

export default class Conversation extends Component {


	// renderBotMessage(index, i, text){
	// 	if (i < index) return <BotMessage text={item.text} key={i + 'bot'}/>
	// 	else if (i === index) return <BotMessage key={i + 'bot'} typing text={item.text}/>
	// 	else return <div key={i + 'bot'}/>	
	// }

	render(){
		const { flow, index, followupIndex } = this.props
		return(
			<div ref="conversationContainer" className="conversationContainer" >
				{flow.map((item, i) => {
					if (item.type === 'statement'){
						if (i < index) return <BotMessage text={item.text} key={i + 'bot'}/>
						else if (i === index) return <BotMessage key={i + 'bot'} typing text={item.text}/>
						else return <div key={i + 'bot'}/>	
					} else {
						if (i <= index && item.selection !== null){
							return(
								<div key={i}>
									<Responses item={item} index={i} goBack={this.props.goBack.bind(this)} />
									{item.options[item.selection].followups.map((followup, j) => {
										if (followup.type === 'statement'){
											if ( (j < followupIndex)) return <BotMessage key={i + ' ' + j} text={followup.text}/>	
											else if (j === followupIndex) return <BotMessage key={i + 'bot' + j} typing text={followup.text}/>
											else return <div key={i + ' ' + j}/>
										} else {
											return(
												<Responses item={followup} index={i} goBack={this.props.goBack.bind(this)} />
											)
										}
									})}

								</div>
							)
						} else {
							return(
								<div key={i}/>
							)
						}
					}
				})}
			</div>
		)
	}
}