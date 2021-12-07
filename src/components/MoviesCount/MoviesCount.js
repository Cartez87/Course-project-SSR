import React from "react";
import PropTypes from "prop-types";

import "./MoviesCount.scss";

const MoviesCount = ({ count }) => (
    <h3><b>{count}</b> movies found</h3>
);

MoviesCount.propTypes = {
  count: PropTypes.number,
};

export default MoviesCount;
