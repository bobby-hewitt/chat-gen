import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { nextInFlow, userResponse, goBack, showFollowup, toggleMinimise, toggleSettings } from 'actions/conversation'
import './style.scss'
import Header from './Header'
import Conversation from './Conversation'
import UserInput from './UserInput'
import Settings from './Settings'
class Controller extends Component {

	constructor(props){
		super(props)
		this.state = {
			items: []
		}
	}

	componentDidMount(){
		this.props.nextInFlow()
	}

	componentWillReceiveProps(np){
		const { flow, index } = this.props 
		if (np.index > this.props.index){
			if (flow[np.index] && flow[np.index].type === 'statement'){
				this.nextQuestion()
			}
		}
	}

	nextQuestion(){
		const { flow, index } = this.props 
		let next = flow[index +1]
		if (next){
			let time = flow[index] ? flow[index].time : next.time
			setTimeout(() => {
				this.props.nextInFlow()
				this.updateScroll()
			}, time * 2)	
		}
	}

	goBack(index){
		this.props.goBack(index)
		this.updateScroll()
	}

	sendResponse(selection){
		const { flow, index } = this.props
		this.props.userResponse(selection)
		let followupsLength = flow[index].options[selection].followups.length
		for(var i = 0; i < followupsLength + 1; i++){
			this.showFollowups(followupsLength, i)
		}
	}

	showFollowups(followupsLength, i){
		setTimeout(() => {
			if (i < followupsLength){
				this.props.showFollowup(i)
				this.updateScroll()
			} else {
				// this.props.showFollowup(i)

				// this.nextQuestion()
				// this.updateScroll()
			}	
		}, i * 1000)
	}

	updateScroll(){
	    var element = this.refs.conversation.refs.conversationContainer
	    element.scrollTop = element.scrollHeight;
	}

	toggleMinimise(payload){
		this.props.toggleMinimise(payload)
	}

	toggleSettings(payload){
		this.props.toggleSettings(payload)
	}




	render(){
		const { flow, index, followupIndex, isMinimised, isSettings } = this.props
		return(
			<div className={isMinimised ? "controllerContainer minimised" : 'controllerContainer'}>
				<div className="relative">
					<Header isMinimised={isMinimised} isSettings={isSettings} toggleSettings={this.toggleSettings.bind(this)} toggleMinimise={this.toggleMinimise.bind(this)}/>
					
					<Conversation ref="conversation" flow={flow} index={index} followupIndex={followupIndex} goBack={this.goBack.bind(this)} />
					
					{this.props.isSettings &&	
						<Settings flow={flow} />
					}
					{!this.props.isSettings &&
						<UserInput flow={flow}  index={index} followupIndex={followupIndex} sendResponse={this.sendResponse.bind(this)}/>
					}
				</div>
			</div>
		)
	}

}

const mapStateToProps = state => ({
	followupIndex: state.conversation.followupIndex,
	flow: state.conversation.flow,
	index:state.conversation.index,
	isMinimised: state.conversation.isMinimised,
	isSettings: state.conversation.isSettings
})

const mapDispatchToProps = dispatch => bindActionCreators({
  push: (path) => push(path),
  nextInFlow,
  userResponse,
  showFollowup,
  goBack,
  toggleMinimise,
  toggleSettings
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller)