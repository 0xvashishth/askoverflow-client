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



  const [question, setquestion] = useState({});
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


  console.log(question);
  return (
    <div>
      <NavForHome />
      {/* Grid System for questions */}
      <div class="maincontent">
        <div class="row">
          {/*first grid*/}
          <div class="col-sm-3 col-md-2 d-none d-sm-block">
            <div class="just-padding">
              <div class="list-group list-group-flush bg-light bg-gradient">
                <a
                  href="#item1"
                  class="list-group-item clickleftmenu bg-light bg-gradient"
                  style={{ fontSize: "12px", textDecoration: "none" }}
                  id="clickleftmenu1"
                >
                  Home
                </a>

                <div
                  class="list-group-item clickleftmenu bg-light bg-gradient"
                  // data-toggle="collapse"
                  style={{ fontSize: "12px", textDecoration: "none" }}
                  id="clickleftmenu2"
                >
                  PUBLIC
                </div>
                <div
                  class="list-group list-group-flush bg-light bg-gradient"
                  id="item-3"
                >
                  <a
                    href="#item31"
                    id="clickleftmenu3"
                    style={{ textDecoration: "none" }}
                    class=" clickleftmenu list-group-item bg-light bg-gradient"
                  >
                    <i class="fas fa-globe-africa"></i>Questions
                    <span class="badge countbadge badge-primary">9</span>
                  </a>

                  <a
                    href="#item32"
                    id="clickleftmenu4"
                    style={{ textDecoration: "none" }}
                    class="clickleftmenu list-group-item bg-light bg-gradient"
                  >
                    <i class="fas fa-tags"></i>Tags
                    <span class="badge countbadge badge-primary">9</span>
                  </a>

                  <a
                    href="#item33"
                    id="clickleftmenu5"
                    style={{ textDecoration: "none" }}
                    class="clickleftmenu list-group-item bg-light bg-gradient"
                  >
                    <i class="fas fa-users"></i>Users
                    <span class="badge countbadge badge-primary">9</span>
                  </a>

                  <a
                    href="#item33"
                    id="clickleftmenu6"
                    style={{ textDecoration: "none" }}
                    class="clickleftmenu list-group-item bg-light bg-gradient"
                  >
                    <i class="fas fa-briefcase"></i>Jobs
                    <span class="badge countbadge badge-primary">9</span>
                  </a>
                </div>
                <a
                  href="#item1"
                  class="list-group-item clickleftmenu bg-light bg-gradient"
                  style={{ fontSize: "12px", textDecoration: "none" }}
                  id="clickleftmenu7"
                >
                  Teams
                </a>
              </div>
            </div>
          </div>
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
                      <a href="/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router" class="question-hyperlink">{question.header} [closed]
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
                    <h3>{10} Answers:</h3>
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
                  {/*first answer*/}
                  <div class="row">
                    <div class="col-1">
                      <div>
                        <a href="#hello"><i class="fas fa-chevron-up"></i></a>
                      </div>
                      <div>{5}</div>
                      <div>
                        <a href="#hello"><i class="fas fa-chevron-down"></i></a>
                      </div>
                      <div><i class="fa fa-check"></i></div>
                    </div>
                    <div class="col-10 bg-light text-dark">
                      <div class="row">

                        <div class="col-12">
                          <p>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-8">
                          <span class="fc-light mr2"><a href="#hello">share</a></span> &nbsp;
                          <span class="fc-light mr2"><a href="#hello">edit</a></span> &nbsp;
                          <span class="fc-light mr2"><a href="#hello">follow</a></span> &nbsp;
                        </div>
                        <div class="col-4">
                          <div class="font-weight-light text-secondary">
                            answered <span title="2019-03-03 16:34:02Z" class="relativetime">Mar 3, 2019 at 16:34</span>
                          </div>
                          <div>
                            <div class="user-gravatar32">
                              <img src="https://graph.facebook.com/100001761656850/picture?type=large" alt="user avatar" width="32" height="32" class="bar-sm" /> &nbsp; <a href="#hello">d.poriya</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-1"></div>
                  </div>
                  <br />
                  <br />
                  {/* second answer */}
                  <div class="row answerm">
                    <div class="col-1">
                      <div>
                        <a href="#hello"><i class="fas fa-chevron-up"></i></a>
                      </div>
                      <div>{5}</div>
                      <div>
                        <a href="#hello"><i class="fas fa-chevron-down"></i></a>
                      </div>
                      {/* <div><i class="fa fa-check"></i></div> */}
                    </div>
                    <div class="col-10 bg-light text-dark">
                      <div class="row">

                        <div class="col-12">
                          <p>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-8">
                          <span class="fc-light mr2"><a href="#hello">share</a></span> &nbsp;
                          <span class="fc-light mr2"><a href="#hello">edit</a></span> &nbsp;
                          <span class="fc-light mr2"><a href="#hello">follow</a></span> &nbsp;
                        </div>
                        <div class="col-4">
                          <div class="font-weight-light text-secondary">
                            answered <span title="2019-03-03 16:34:02Z" class="relativetime">Mar 3, 2019 at 16:34</span>
                          </div>
                          <div>
                            <div class="user-gravatar32">
                              <img src="https://graph.facebook.com/100001761656850/picture?type=large" alt="user avatar" width="32" height="32" class="bar-sm" /> &nbsp; <a href="#hello">d.poriya</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-1"></div>
                  </div>
                </div>

                <hr />
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