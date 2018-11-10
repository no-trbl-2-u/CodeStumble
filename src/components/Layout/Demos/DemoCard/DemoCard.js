import React from 'react';
import { Link } from '@reach/router';

import './demoCard.css'

const DemoCard = (props) => {
  const {demoName, path, image, text } = props
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card mb-4 shadow-sm card-box">
        <img className="card-img-top" src={ image } alt="Card caption" />
        <div className="card-body">  
          <h4 className="card-title">{demoName}</h4>
          <p className="card-text">
            { text }
          </p>
          
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-success">Code</button>
              
              <Link to={path}>
                <button type="button" className="btn btn-sm btn-warning">Demo</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DemoCard;