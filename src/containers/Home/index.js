import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'
import Controller from '../Controller'
import Canvas from '../Canvas'
import { Paragraph } from 'components'

class Home extends Component {
	render(){
		return(
			<div className="home">
				<Paragraph copy="hello" />
				<Canvas />
				<Controller />
			</div>
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  push: (path) => push(path)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)