import React from 'react';

import img from './images/meASCII.jpg'

const AboutIMG = () => {
  return (
    <React.Fragment>
      <img
        className="AboutIMG img-circle"
        alt="Anthony Allen"
        src={img}
      />
    </React.Fragment>
  );
};

export default AboutIMG;