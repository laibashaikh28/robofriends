import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux'
//import { robots } from './robots';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> this.setState({ robots: users }));
	}

	render(){
		const { robots } = this.state;
		const { searchField , onSearchChange } = this.props;
		const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase())
		});

		return !robots.length ?
		<h1>Loading..</h1>:
		(
			<div className='tc'>
				<h1 className='f1'>ROBOFRIENDS</h1>
				<SearchBox searchChange = {onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
		
	}
		
		
}

export default connect(mapStateToProps, mapDispatchToProps)(App);