import React from "react";
import Footer from "../components/footer";
import PageTitle from "../components/pageTitle";
import Header from "../components/header";
import "./members.css";
import "../index.css";
import space2 from "../components/Images/space2.png";

class Member extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      position: this.props.position,
    };
  }
}

const members = [
  <Member name="Tom Clubman" position="President" />,
  <Member name="Berry Buildabear" position="Vice President" />,
  <Member name="Publix Supermarket" position="Treasurer" />,
  <Member name="Bippity" position="Bank Robber" />,
  <Member name="Boppity" position="Bank Robber's Assistant" />,
  <Member name="Boo" position="Bank Robber's Assistant's Assistant" />,
  <Member name="Shoe" position="Closet Dweller" />,
  <Member name="Mr. White" position="Chemistry Teacher" />,
  <Member name="Jesse" position="Chemistry Teacher's Student" />,
  <Member name="Saul" position="Chemistry Teacher's Lawyer" />,
  <Member name="Gus" position="Chemistry Teacher's Employer" />,
  <Member name="Best Buy" position="Technology Store" />,
  <Member name="Target" position="Supermarket" />,
];

class MemberBox extends React.Component {
  render() {
    return (
      <div className="member-box">
        <div className="member-content">
          <div className="member-image">
            <img src={this.props.imgPath} alt="" />
          </div>
          <div className="member-info">
            <div className="member-name">
              <p>{this.props.name}</p>
            </div>
            <div className="member-role">
              <p>{this.props.role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class Members extends React.Component {
  renderMemberBoxes() {
    let memberBoxes = [];

    for (var i = 0; i < members.length; i++) {
      memberBoxes.push(
        <MemberBox
          name={members[i].props.name}
          role={members[i].props.position}
          imgPath="gators.png"
        />
      );
    }

    return memberBoxes;
  }

  render() {
    return (
      <div className="page">
        <Header />

        <div className="title-wrapper">
          <img src={space2}></img>
          <PageTitle text="MEET OUR MEMBERS" />
        </div>

        <div className="member-grid">{this.renderMemberBoxes()}</div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
