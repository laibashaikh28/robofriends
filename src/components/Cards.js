import React from 'react';

const Cards = ({ name,email,id }) => {
	//const { name,email,id } = props;
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Cards;