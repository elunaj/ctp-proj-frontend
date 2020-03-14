import React, { useState } from 'react';

export const MovieForm = ( {onNewMovie} ) => {
	const[title, setTitle] = useState('');
	const[rating, setRating] = useState(1);

	console.log(rating)

	return (
		<form>
			<label>Add movie:</label>
			<input 
				placeholder="movie title"
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<input 
				placeholder="rating"
				value={rating}
				onChange={e => setRating(e.target.value)}
			/>
			<input 
				type="submit" 
				value="Submit" 
				onClick={async () => {
					const movie = {title, rating};
					const response = await fetch("http://localhost:5000/add_movie", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(movie)
					})

					if (response.ok) {
						console.log('response worked');
						onNewMovie(movie);
						setTitle('');
						setRating(1);
					}
				}} />

		</form>
		);
}