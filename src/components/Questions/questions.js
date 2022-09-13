import React, { useState } from 'react';
import './questions.css';
import fox from "./fox.jpg";
import TextTruncate from 'react-text-truncate';
import $ from "jquery";

const Questions = (props) => {

  var [questions, setQuestions] = useState([]);

  // const  book  = props.book;
  var ipuser="initial", questionsresponse;
  var repeatQuestions = [];
  // $.getJSON("https://api.ipify.org?format=json", function(data) {
  //   ipuser = data.ip;
  // });

  // const postQuestionData = async () => {
  //   // e.preventDefault();
  //   const res = await fetch("https://askoverflow-server.vashishth-patel.repl.co/publicquestionsget", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     // body: JSON.stringify({
  //     //   // nothing to pass as of now
  //     //   ip: "hello"
  //     // }),
  //   })
  //   questionsresponse = await res.json();
  //   console.log(questionsresponse[0]);
  //   count = questionsresponse.length;
  //   // if (res.status === 201) {
  //   //     questionsresponse
  //   // } else {
  //   //   window.alert(questionsresponse.error);
  //   // }
  // }
  // postQuestionData();

  // console.log(count);
  
  fetch('https://askoverflow-server.vashishth-patel.repl.co/publicquestionsget')
  .then(questionsresponse => questionsresponse.json())
  .then(questionsresponse =>{
    // console.log(questionsresponse.length)
    for (var i = 0; i < questionsresponse.length; i++) {
    // console.log(questionsresponse[i])
    repeatQuestions[i] = <div>
      <div class="row">
        <div class="col-md-2 commenttagview">
          <div class="paracomment float-center">2 comments</div>
          <div class="paracommentbadge float-center badge badge-success">4 answers</div>
          <div class="paracomment float-center">{questionsresponse[i].tags.length}</div>
          <div class="paracomment float-center">36 views</div>
        </div>

        <div class="col-md-10">
          <div class="row">
            <div class="row">
              <a href="#header" class="header-question text-primary" style={{ textDecoration: "none" }}><TextTruncate line={2} text={questionsresponse[i].body} /></a>
            </div>
            <div class="row">
              <div class="col-8">
                <a href="#badge" class="badge badge-pad">{questionsresponse[i].tags[0]}</a>&nbsp;
                <a href="#badge" class="badge badge-pad">{questionsresponse[i].tags[1]}</a>&nbsp;
                <a href="#badge" class="badge badge-pad">{questionsresponse[i].tags[2]}</a>&nbsp;
              </div>
              <div class="col-4">
                <div class="d-flex">
                  <img
                    width="20"
                    height="20"
                    alt="focximg"
                    class="" style={{ borderRadius: "10px" }} src={fox} />&nbsp;
                  <a class="avatarusername" href="#avatarlink" style={{ textDecoration: "none" }}><span class="avatarname">{questionsresponse[i].author}</span></a>&nbsp;<div class="daysagocss">
                    asked 14 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>

  }
  })

  console.log(repeatQuestions);
  // for(var i=0;i<10000000000;i++){
    
  // }
  repeatQuestions[3] = <div>Hello Developer</div>
  // console.log(repeatQuestions[0])
  return (repeatQuestions)
};

export { Questions };