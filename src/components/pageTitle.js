import React from 'react';
import './pageTitle.css';

export default class PageTitle extends React.Component
{
  render()
  {
    return (
      <div className="page-title">
        <h1>
          {this.props.text}
        </h1>
      </div>
    );
  }
}