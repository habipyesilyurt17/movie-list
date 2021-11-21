import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import '../../App.css';
import './Detail.css'
import Navbar from "../navbar";
import { MovieType } from "../../types";


interface IMovieProps {
	movies: MovieType[];
}
type QuizParams = {
	movieId: string;
};

const Detail: React.FC<IMovieProps> = ({ movies }) => {

	const { movieId } = useParams<QuizParams>();
	const filteredMovie = movies.find(movie => movie.id === Number(movieId));
	console.log("filteredMovie---",filteredMovie)

	return (
		<div className="grid-container">
			<div className="header">
				<Navbar />
			</div>
			{
				filteredMovie !== undefined &&
				<div className="movie-detail">
					<div className="image">
						<div className="detail-card">
							<img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${filteredMovie.poster_path}`} alt="Sample photo" />
						</div>
					</div>
					<div className="detail">
							<h1>{filteredMovie.original_title } ({filteredMovie.vote_count})</h1>
							<p className="vote"><b>Vote:</b> {filteredMovie.vote_average}</p>
							<p className="release-date"><b>Release Date: </b>{filteredMovie.release_date}</p>
							<hr/>
							<p className="overview">{filteredMovie.overview}</p>
					</div>
				</div>
			}
		</div>
	)
}

export default Detail;
