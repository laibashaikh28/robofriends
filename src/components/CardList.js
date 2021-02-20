import React from 'react';
import Cards from './Cards';

const CardList = ({ robots })=>{
	const cardArray = robots.map((user,i) => {
		return <Cards 
		id = {robots[i].id} 
		name = {robots[i].name} 
		email = {robots[i].email}/>;
	});
	return(
		<div>
		    { cardArray }
		</div>
	);
		
}

export default CardList;