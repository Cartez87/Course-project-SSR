import React from "react";
import bgImage from '../../assets/header-image.jpg';

import './HeaderImage.scss';

const HeaderImage = () => {

  return (
    <div className="header-image" style={{ backgroundImage: `url(${bgImage})` }}>
    </div>
  )
}

export default HeaderImage;