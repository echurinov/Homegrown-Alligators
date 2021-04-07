import React from 'react';
import Footer from '../components/footer';
import PageTitle from '../components/pageTitle';
import './members.css';

const address = "100 Farrior Hall at 205 Fletcher Drive, P.O. Box 112015, University of Florida, Gainesville, FL 32611-2015";

class MemberBox extends React.Component
{
  render()
  {
    return (
      <div className='member-box'>
        <div className='member-image'>
          <img src={this.props.imgPath} alt=""/>
        </div>
        <div className='member-info'>
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

export default class Members extends React.Component
{
  render()
  {
    var boxes = [
      <MemberBox name="Member 1 Name" imgPath="gators.png" role="Role"/>,
      <MemberBox name="Member 2 Name" imgPath="gators.png" role="Role"/>,
      <MemberBox name="Member 3 Name" imgPath="gators.png" role="Role"/>,
      <MemberBox name="Member 4 Name" imgPath="gators.png" role="Role"/>,
      <MemberBox name="Member 5 Name" imgPath="gators.png" role="Role"/>,
      <MemberBox name="Member 6 Name" imgPath="gators.png" role="Role"/>,
      <MemberBox name="Member 7 Name" imgPath="gators.png" role="Role"/>,
      <MemberBox name="Member 8 Name" imgPath="gators.png" role="Role"/>
    ];
    return (
      <div className='page'>
        <div>
          <PageTitle text="MEET OUR MEMBERS"/>
        </div>
        <div className='member-grid'>
          <MemberGrid memberBoxes = {boxes}/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}