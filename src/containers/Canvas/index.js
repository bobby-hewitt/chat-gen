import React, { Component } from 'react'
import './style.scss'
import ReactWindowResizeListener from 'window-resize-listener-react';

export default class Canvas extends Component {

	constructor(props){
		super(props)
		this.canvas = null
		this.ctx = 
		this.run = this.run.bind(this)
		this.getDimensions = this.getDimensions.bind(this);
		this.state = {
			width:0,
			height:0,
			primaryColor: null,
			secondaryColor: null

		}
	}

	componentWillReceiveProps(np){
		if ((np.colors && !this.props.colors) || (np.colors && this.props.colors && np.colors.primary !== this.props.colors.primary)){
			console.log(np.colors.primary)
			this.setState({
				primaryColor:np.colors.primary,
				secondaryColor: np.colors.secondary
			})
		}
	}

	getDimensions(){
		// retain paper size
		const ww = window.innerWidth
		const wh = window.innerHeight
		let w, h
		const isPortrait = wh > ww
		if (isPortrait){
			w = ww -20
			h = w * 1.4142 // aspect ratio of paper sizes

			if (h > window.innerHeight){
				h = window.innerHeight -20
				w = h * 0.7070707070706 
			}
		} else {
			// w = wh - 20
			// h = w * 0.7070707070706
			w = ww -20
			h = w * 0.7070707070706 

			if (h > window.innerHeight){
				h = window.innerHeight -20
				w = h * 1.4142 
			}
		}
		console.log('got dimensions', w, h)
		this.setState({width:w, height:h, isPortrait: isPortrait})
	}

	componentWillMount(){
		this.getDimensions()
	}



	componentDidMount(){
		this.canvas = this.refs.canvas 
		this.ctx = this.refs.canvas.getContext('2d')
	}

	run(){

		window.requestAnimationFrame(this.run)
	}



	render(){
		return(
			<div className="canvasContainer" style={{backgroundColor: this.state.primary}}>
				<ReactWindowResizeListener onResize={this.getDimensions}/>
				
				<canvas ref="canvas" id="canvas" width={this.state.width} height={this.state.height} />
				
			</div>
		)
	}

}