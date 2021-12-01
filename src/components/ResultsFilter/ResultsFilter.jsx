import React from "react";
import { Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { filterMovies } from "../../store/movieActions";
import './ResultsFilter.scss';

const menuItems = [
  'All',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime'
]

const ResultsFilter = () => {
  
  const dispatch = useDispatch();
  const filterState = useSelector((state) => {
    return state.movies.filter;
  });

  const onClick = (e) => {
    e.preventDefault();
    dispatch(filterMovies(e.target.innerText.toLowerCase()));
  }
  
  return (
    <Nav className="category-nav" variant="pills" defaultActiveKey="All-0">
      {menuItems.map((menuItem, index) => 
        <Nav.Item key={`${menuItem}-${index}`}>
          <Nav.Link eventKey={`${menuItem}-${index}`} onClick={onClick}>{menuItem}</Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
}

export default ResultsFilter;