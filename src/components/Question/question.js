import React from "react";
import "./question.css";
import { NavForHome } from "../NavBar/NavBar";
import { SideFeatured } from "../SideFeatured/sidefeatured"
import { AskQuestion } from "../AskQuestion/askquestion"
import { useParams } from "react-router-dom";
// import $ from "jquery";
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import AnswerPost from './postAnswer.js';
import Answer from './questionAnswer.js';
import Sidebar from '../HomePage/sidebar.js';
import EditQuestion from './editQuestion.js';
import ShareLink from './ShareLink.js';
// import LiveMarkdown from './editor.js';

// class Question extends Component {
const Question = (props) => {
  // render() {
  // const question_id = props.match.params.question_id;
  const [cookies] = useCookies(['user']);
  // const [markdownInput, setMarkdownInput] = useState()
  var imgforloadvote = <img src="https://user-images.githubusercontent.com/76911582/196022890-ace53133-d1ec-49ae-83e0-45135f1116b4.gif" width="15px" alt="#img" />
  var imgforload = <img src="https://user-images.githubusercontent.com/76911582/196022890-ace53133-d1ec-49ae-83e0-45135f1116b4.gif" width="60px" alt="#img"/>
  const [question_count_vote, setquestion_count_vote] = useState(imgforloadvote);

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


  const userid = cookies.userid;
  const [question, setquestion] = useState({ answers: [] });
  const [questiontags, setquestiontags] = useState(imgforload);

  // console.log(question_id);

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
        // for (var i = 0; i < res.data.answers.length; i++) {
        //   var men = res.data.answers[i].answered_by.toString().substring(0, 8);
        //   var date = new Date(parseInt(men, 16) * 1000)
        //   console.log(date);
        //   // console.log(Date(res.data.answers[i].answered_by.getTimeStamp()));
        // }
        setquestiontags(questiontags1)
        // console.log(questiontags)
        // console.log("This is questions tags");
        setquestion_count_vote(res.data.liked_by.length - res.data.unliked_by.length);
        setquestion(res.data);
        console.log(res.data);
        // console.log(res.data.tags)
      })
      .catch(err => {
        window.alert('Error from server!!', err);
      })
  }
  function addQuestionVote(vote) {
    // https://user-images.githubusercontent.com/76911582/190166775-b792861c-f01f-4a69-b406-e08a0adf0fd0.gif
    if (jwttoken !== "") {
      var prevcount = question_count_vote;
      setquestion_count_vote(imgforloadvote)
      // console.log(vote);
      // console.log(answer._id,jwttoken)
      // JSON.stringify(error)
      axios.post('https://askoverflow-server.vashishth-patel.repl.co/questionvote', {
        questionid: question._id,
        vote: vote,
        jwttokenloginuser: jwttoken
      }).then(function(response: AxiosResponse) {
        // console.log(response);
        // console.log(response.data.given_vote);
        var givenvote = response.data.given_vote;
        // var res = JSON.parse(response);
        // var heycount = res.data.given_vote;
        setquestion_count_vote(prevcount + givenvote);
        // if(response.status === 201) {
        //   setcount_vote(answer.liked_by.length - answer.unliked_by.length + response.given_vote);
        //   // window.alert(response.message);
        // }
        // else{
        //   window.alert(response.error);
        // }
      }).catch(function(error: AxiosError) {
        // console.log(error.response.data.error);
        window.alert(error.response.data.error);
        setquestion_count_vote(prevcount);
      });
    } else {
      window.alert("Please login to vote");
    }
  }


  useEffect(() => {
    getquestion();
  }, []);
  let index = 0;
  // function getAnswerList(ans) {
  //   index++;
  //   return <Answer answer={ans} mtype= {"answer"} aid={index} />;
  // }
  // const allAnswers = question.answers.map(getAnswerList);
  // console.log(allAnswers);
  const allAnswers = question.answers.map((ans) => {
    index++;
    return <Answer answer={ans} mtype={"answer"} aid={index} />;
  });
  var profile_url = "https://avatars.dicebear.com/api/gridy/" + question.asked_by + ".svg";

  // edit, share and follow for question

  let editQuestionLink = <span className="fc-light mr2" data-toggle="modal" data-target="#loginModal"><a href="#loginModal">edit &nbsp;</a></span>;

  if (jwttoken !== "") {
    if (userid === question.posted_by) {
      editQuestionLink = <span className="fc-light mr2" data-toggle="modal" data-target={'#editQuestion' + question._id}><a href="#editQuestion">edit &nbsp;</a></span>;
    } else {
      editQuestionLink = " ";
    }
  }
  // console.log(question);
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
                  <div className="col-lg-1 col-md-1 col-sm-1 col-2">
                    <div>
                      <div className="btnupdown btn-primary" onClick={event => addQuestionVote(1)}>
                        <i class="fas btnupdownicon fa-chevron-up"></i>
                      </div>
                    </div>
                    <div className="mrginevotescountanswer">{question_count_vote}</div>
                    <div>
                      <div className="btnupdown btn-primary" onClick={event => addQuestionVote(-1)}>
                        <i class="fas btnupdownicon fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-11 col-md-11 col-sm-11 col-10">
                    <div itemprop="name" class="fs-headline1 ow-break-word mb8 flex--item fl1">
                      <a href={`/question/${question_id}`} class="question-hyperlink">{question.header}
                      </a>
                    </div>
                  </div>

                </div>
                <div class="row margquesions">
                  <div class="col-lg-7 col-7 askdetails">
                    <span class="fc-light mr2">Asked on</span> &nbsp;
                    <span class="fc-dark mr2">{question.posted_on}</span> | &nbsp;
                    <span class="fc-light mr2">Viewed</span> &nbsp;
                    <span class="fc-dark mr8">{question.views} times</span>
                  </div>
                  <div class="col-lg-5 col-5 askdetails">
                    <span class="fc-light mr2">Posted by</span> &nbsp;
                    <img src={profile_url} alt="user avatar" width="32" height="32" class="bar-sm" /> &nbsp; <a href="#hello">{question.asked_by}</a>
                  </div>
                </div>
                {/* edit share and follow start */}
                <div class="row">
                  <div className="col-8">
                    <ShareLink mylink={question._id} mtype={"question"} aid={1} />
                    {editQuestionLink}
                    {/* edit answer modal start */}
                    <div class="modal fade" id={'editQuestion' + question._id} tabindex="-1" role="dialog" aria-labelledby="editQuestionCenterTitle" aria-hidden="true">
                      <EditQuestion questionHeader={question.header} questionTags={question.tags} questionBody={question.body} questionId={question._id} />
                    </div>
                    {/* edit answer modal end */}
                    <span className="fc-light mr2"><a href="#hello">follow</a></span> &nbsp;
                  </div>
                </div>
                {/* edit share and follow end */}

                <div>
                </div>
                <hr />

                <div class="row margquesions1">

                  <div class="row">
                    <div class="col-10 offset-1">
                      <ReactMarkdown children={question.body} />
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
    </div >
  );
}
export default Question;