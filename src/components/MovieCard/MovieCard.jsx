import React from "react";
import propTypes from 'prop-types';
import MovieToast from '../Toast';
import { selectMovie } from '../../store/movieActions';

import './MovieCard.scss';
import { useDispatch } from "react-redux";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, genres } = movie;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectMovie(movie));
  }
  
  return(
    <div id={id} className="movie-card" onClick={handleClick}>
      <div className="movie-image"><img src={poster_path} alt={title} /></div>
      <div className="movie-info d-flex justify-content-between align-items-start">
        <h3 className="movie-name">{title}</h3>
        <span className="movie-year">{release_date}</span>
      </div>
      <span className="movie-category">{genres.map(genre => `${genre}, ` )}</span>
      <MovieToast id={id}/>
    </div>
  );
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    release_date: propTypes.string,
    genres: propTypes.array,
    poster_path: propTypes.string
  })
}

export default MovieCard;