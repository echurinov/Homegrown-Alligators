import React from 'react';
import reactDom from 'react-dom';
import './members.css';

const address = "100 Farrior Hall at 205 Fletcher Drive, P.O. Box 112015, University of Florida, Gainesville, FL 32611-2015";

class PageHeader extends React.Component
{
  render()
  {
    return (
      <div>
        <h1>
          {this.props.text}
        </h1>
      </div>
    );
  }
}

class MemberBox extends React.Component
{
  render()
  {
    return (
      <div className='member-box'>
        <div className='member-image'>
          <img src={this.props.imgPath} alt=""/>
        </div>
        <div className='member-name'>
          <p>
            {this.props.name}
          </p>
        </div>
        <div className='member-role'>
          <p>
            {this.props.role}
          </p>
        </div>
      </div>
    );
  }
}

class MemberGrid extends React.Component
{
  render()
  {
    return (
      <div>
        <div className='member-grid-row'>
          {this.props.memberBoxes[0]}
          {this.props.memberBoxes[1]}
          {this.props.memberBoxes[2]}
          {this.props.memberBoxes[3]}
        </div>
        <div className='member-grid-row'>
          {this.props.memberBoxes[4]}
          {this.props.memberBoxes[5]}
          {this.props.memberBoxes[6]}
          {this.props.memberBoxes[7]}
        </div>
      </div>
    );
  }
}

class Footer extends React.Component
{
  render()
  {
    return (
      <div>
      <p>
        {address}
      </p>
      </div>
    );
  }
}

export default class Page extends React.Component
{
  render()
  {
    var boxes = [
      <MemberBox name="Member 1 Name" imgPath="logo192.png" role="Role"/>,
      <MemberBox name="Member 2 Name" imgPath="logo192.png" role="Role"/>,
      <MemberBox name="Member 3 Name" imgPath="logo192.png" role="Role"/>,
      <MemberBox name="Member 4 Name" imgPath="logo192.png" role="Role"/>,
      <MemberBox name="Member 5 Name" imgPath="logo192.png" role="Role"/>,
      <MemberBox name="Member 6 Name" imgPath="logo192.png" role="Role"/>,
      <MemberBox name="Member 7 Name" imgPath="logo192.png" role="Role"/>,
      <MemberBox name="Member 8 Name" imgPath="logo192.png" role="Role"/>
    ];
    return (
      <div className='page'>
        <div className="header">
          <PageHeader header text="Meet Our Members"/>
        </div>
        <div className='member-grid'>
          <MemberGrid memberBoxes = {boxes}/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    );
  }
}

reactDom.render(
  <Page/>,
  document.getElementById('root')
  );