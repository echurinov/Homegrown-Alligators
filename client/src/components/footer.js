import React from 'react';
import './footer.css'

const address = "100 Farrior Hall at 205 Fletcher Drive, P.O. Box 112015, University of Florida, Gainesville, FL 32611-2015";

export default class Footer extends React.Component
{
  render()
  {
    return (
      <div className="footer">
        <p>
            {address}
        </p>
      </div>
    );
  }
}