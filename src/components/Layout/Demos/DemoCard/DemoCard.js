import React from 'react';

import './demoCard.css'

const DemoCard = () => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card mb-4 shadow-sm card-box">
        <img className="card-img-top" src="https://picsum.photos/300/200/?" alt="Card caption" />
        
        <div className="card-body">  
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. 
            This content is a little bit longer.
          </p>
          
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-success">Code</button>
              <button type="button" className="btn btn-sm btn-warning">Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;