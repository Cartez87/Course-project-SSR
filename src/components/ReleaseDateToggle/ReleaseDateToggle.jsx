import React from "react";
import Select from 'react-select';
import { SORT_CONST } from "../../helper/constants";
import { useSelector, useDispatch } from "react-redux";
import { sortMovies } from "../../store/movieActions";

import './ReleaseDateToggle.scss';

const options = [
  { value: SORT_CONST.UP_TO, label: 'Up to' },
  { value: SORT_CONST.DOWN_TO, label: 'Down to' },
]

const sortValueMapToOrder = {
  'UP_TO': 'asc',
  'DOWN_TO': 'desc',
}

const ReleaseDateToggle = () => {
  const dispatch = useDispatch();
  const sortState = useSelector((state) => {
    return state.movies.sort;
  });
  
  const onSelect = (selectedOptObj) => {
    dispatch(sortMovies({...selectedOptObj, order: sortValueMapToOrder[selectedOptObj.value]}));
  }

  return (
    <Select
      options={options}
      placeholder='release date'
      onChange={onSelect}
      value={sortState}
    />
  );
}

export default ReleaseDateToggle;