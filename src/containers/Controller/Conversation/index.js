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
						if (item.selection !== null){
							return(
								<Responses key={i} item={item} index={i} goBack={this.props.goBack.bind(this)} />
							)
						} 
						// else if () {
						// 	return(
						// 		<div key={i}/>
						// 	)
						// } 
						else {
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