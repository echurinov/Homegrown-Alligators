import React, { useState } from "react";
import Footer from "../components/footer";
import PageTitle from "../components/pageTitle";
import Header from "../components/header";
import "./members.css";
import "../index.css";
import MemberCard from '../components/memberCard';
import space2 from "../components/Images/space2.png";
import axios from 'axios';

export default class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       members: []
    };
  }
  

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/member/')
      .then(res => {
        //console.log("Print-showMembers-API-response: " + res.data.length)
        const members = res.data;
        this.setState({members: members})
      })
      .catch(err =>{
        console.log('Error from members.js');
      })
  };

  render() {
    const members = this.state.members;
    //console.log("Print Members: " + members);
    let memberList;

    if(!members) {
      memberList = "There is no member record!";
    } else {
      memberList = members.map((member, k) =>
        <MemberCard member={member} key={k} />
      );
    }
    
    return (
      <div className="page">
        <Header />
        <div className="title-wrapper">
          <img src={space2}></img>
          <PageTitle text="MEET OUR MEMBERS" />
        </div>
        <div className="list" >
          {memberList}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

