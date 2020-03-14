import React from 'react';

export const Movies = ({ movies }) => {
	return (
		<div>
			{movies.map((movie, i) => {
				return (
					<ul key={i}>
						<li>Movie title: {movie.title}</li>
						<li>Movie rating: {movie.rating}</li>
					</ul>
					);
				})}
		</div>
	);
}