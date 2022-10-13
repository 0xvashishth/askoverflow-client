import React, { Component } from "react";
import "./question.css";
import { NavForHome } from "../NavBar/NavBar";
import { SideFeatured } from "../SideFeatured/sidefeatured"
// import { Questions } from "../Questions/questions"
import { AskQuestion } from "../AskQuestion/askquestion"
import { useParams } from "react-router-dom";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import AnswerPost from './postAnswer.js'
import Answer from './questionAnswer.js';
import Sidebar from '../HomePage/sidebar.js';
// import LiveMarkdown from './editor.js';

// class Question extends Component {
const Question = (props) => {
  // render() {
  // const question_id = props.match.params.question_id;
  const [cookies] = useCookies(['user']);
  const { question_id } = useParams(); //this is for function component
  var jwttoken = cookies.jwttokenloginuser || "";
  let askquestionsign;
  if (jwttoken !== "") {
    askquestionsign = <div> <button class="float-right
 btnaskquestion btn btn-secondary" data-bs-toggle="modal" data-bs-target="#askquestionmodal">Ask Question</button>
      <AskQuestion /> </div>
  } else {
    askquestionsign = <button class="float-right btnaskquestion btn btn-secondary" data-toggle="modal" data-target="#loginModal">Login To Ask Question</button>
  }



  const [question, setquestion] = useState({answers:[]});
  const [questiontags, setquestiontags] = useState([]);

  console.log(question_id);

  const getquestion = async () => {
    axios
      .get(`https://askoverflow-server.vashishth-patel.repl.co/question?id=${question_id}`)
      .then(res => {
        var questiontags1 = [];
        questiontags1[0] = <div class="question-div offset-1"></div>
        for (var i = 0; i < res.data.tags.length; i++) {
          questiontags1[i + 1] = <div class="question-div">
            <a href="#hhh"><span class="badge question-tags">{res.data.tags[i]}</span></a>
          </div>
        }
        setquestiontags(questiontags1)
        console.log(questiontags)
        setquestion(res.data);
        console.log(res.data.tags)
      })
      .catch(err => {
        console.log('Error from server!!');
      })



  }



  useEffect(() => {
    getquestion();
  }, []);
  const allAnswers = question.answers.map(ans => <Answer answer={ans}/>);

  console.log(question);
  return (
    <div>
      <NavForHome />
      {/* Grid System for questions */}
      <div class="maincontent">
        <div class="row">
          {/*first grid*/}
          <Sidebar />
          {/*second grid*/}
          <div class="col-sm-9 col-md-10 col-12 bgmoredark cssforpadTomaincontent">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-12">
                <div class="row margquesions">
                  <div class="col-12">
                    {askquestionsign}
                  </div>
                </div>
                <div class="row margquesions">
                  <div class="col-12">
                    <h1 itemprop="name" class="fs-headline1 ow-break-word mb8 flex--item fl1">
                      <a href={`/question/${question_id}`} class="question-hyperlink">{question.header}
                      </a>
                    </h1>
                  </div>

                </div>
                <div class="row margquesions">
                  <div class="col-lg-8 col-12">
                    <span class="fc-light mr2">Asked</span> &nbsp;
                    <span class="fc-dark mr2">5 years, 1 month ago</span> | &nbsp;
                    <span class="fc-light mr2">Modified</span> &nbsp;
                    <span class="fc-dark mr2">1 year, 2 months ago</span> | &nbsp;
                    <span class="fc-light mr2">Viewed</span> &nbsp;
                    <span class="fc-dark mr8">404k times</span>
                  </div>
                </div>
                <hr />

                <div class="row margquesions1">

                  <div class="row">
                    <div class="col-10 offset-1">
                      <p>{question.body}</p>
                    </div>
                  </div>
                  <div>
                    {questiontags}
                  </div>

                </div>
                <hr />

                <div class="row justify-content-center margquesions1">
                  <div class="col-lg-8 col-sm-8 col-12">
                    <h3>{question.answers.length} Answers:</h3>
                  </div>

                  <div class="col-lg-4 col-sm-4 col-12">
                    <div class="row">
                      <div class="col-lg-4 col">
                        sorted by
                      </div>
                      <div class="col-lg-2 col">
                        <select>
                          <option>ascending</option>
                          <option>Most votes</option>
                          <option>descending</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <br />

                <div>
                  {/*answersr*/}
                  {allAnswers}
                  
                </div>

                <hr />
                
                {/*<LiveMarkdown />*/}
                <AnswerPost />
              </div>
              <div class="col-lg-4 bgmoredark">
                <br />
                <SideFeatured />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;