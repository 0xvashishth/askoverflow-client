import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'
import EditAnswer from './editAnswer.js';
import { useCookies } from 'react-cookie';
import axios, { AxiosResponse, AxiosError } from 'axios';
// import React, { useState } from 'react'
import ShareLink from './ShareLink.js';

import "./question.css";

const Answer = (props) => {
  const { answer, mtype, aid, question_owner, question_id } = props;
  // const {key} = props;
  const [cookies] = useCookies(['user']);
  const [verifyAnswerloading,setverifyAnswerloading] = useState();
  // const [setMarkdownInput] = useState()
  var checkrightvariable = <div><i class="fa fa-check"></i></div>
  const [checkright, setcheckright] = useState(answer.is_verified ? checkrightvariable : ''); //setcheckright never used
  // var linkanswer = "#" + answer._id;
  const [count_vote, setcount_vote] = useState(answer.liked_by.length - answer.unliked_by.length);
  const profile_url = "https://avatars.dicebear.com/api/gridy/" + answer.answered + ".svg";
  const jwttoken = cookies.jwttokenloginuser || "";
  const userid = cookies.userid;
  var imgforloadvote = <img src="https://user-images.githubusercontent.com/76911582/196022890-ace53133-d1ec-49ae-83e0-45135f1116b4.gif" width="15px" alt="#img"/>

  function addVote(vote) {
    // https://user-images.githubusercontent.com/76911582/190166775-b792861c-f01f-4a69-b406-e08a0adf0fd0.gif
    if (jwttoken !== "") {
      var prevcount = count_vote;
      setcount_vote(imgforloadvote)
      // console.log(vote);
      // console.log(answer._id,jwttoken)
      // JSON.stringify(error)
      axios.post('https://askoverflow-server.vashishth-patel.repl.co/answervote', {
        answerid: answer._id,
        vote: vote,
        jwttokenloginuser: jwttoken
      }).then(function(response: AxiosResponse) {
        // console.log(response);
        // console.log(response.data.given_vote);
        var givenvote = response.data.given_vote;
        // var res = JSON.parse(response);
        // var heycount = res.data.given_vote;
        setcount_vote(prevcount + givenvote);
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
        setcount_vote(prevcount);
      });
    } else {
      window.alert("Please login to vote");
    }
  }

  const fun_verifyAnswer = async () => {
    if(window.confirm("Are ou sure? You are verifying this answer!!") === true){
      setverifyAnswerloading(imgforloadvote)
      axios.post('https://askoverflow-server.vashishth-patel.repl.co/answerverify', {
        answerid: answer._id,
        questionid: question_id,
        jwttokenloginuser: jwttoken
      }).then(function(response: AxiosResponse) {
        setcheckright(checkrightvariable);
        setverifyAnswerloading('');
      }).catch(function(error: AxiosError) {
        window.alert(error.response.data.error);
      }); 
    }
  }


  const jwttoken1 = cookies.jwttokenloginuser || "";
  var editAnswerLink = <span className="fc-light mr2" data-toggle="modal" data-target="#loginModal"><a href="#loginModal">&nbsp;edit&nbsp;</a></span>
  var verifyAnswer="";

  if (jwttoken1 !== "") {
    if(userid === question_owner){
      verifyAnswer = <span className="fc-light mr2" data-toggle="modal"><button className="btn" onClick={fun_verifyAnswer}>verify</button></span>;
    }
    if (userid === answer.answered_by) {
      editAnswerLink = <span className="fc-light mr2" data-toggle="modal" data-target={'#editAnswer' + answer._id}><a href="#editAnswer">&nbsp;edit&nbsp;</a></span>;
    } else {
      editAnswerLink = " ";
    }
  }

  // console.log(answer)
  return (
    <>
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-2">
          <div>
            <div className="btnupdown btn-primary" onClick={event => addVote(1)}><i class="fas btnupdownicon fa-chevron-up"></i></div>
          </div>
          <div className="mrginevotescountanswer">{count_vote}</div>
          <div>
            <div className="btnupdown btn-primary" onClick={event => addVote(-1)}><i class="fas btnupdownicon fa-chevron-down"></i></div>
          </div>
          {checkright}
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-10 bg-light text-dark">
          <div className="row" id={mtype + aid}>

            <div className="col-12">
              <ReactMarkdown children={answer.answer_body} />
            </div>
          </div>
          <div class="row">
            <div className="col-8">
              {/* <span className="fc-light mr2"><a href={linkanswer}>share</a></span> &nbsp; */}
              <ShareLink mylink={answer.answered_by} mtype={mtype} aid={aid} />
              {editAnswerLink}{verifyAnswer}{verifyAnswerloading}
              {/* edit answer modal start */}
              <div class="modal fade" id={'editAnswer' + answer._id} tabindex="-1" role="dialog" aria-labelledby="editAnswerCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="editAnswerLongTitle">Edit Your Answer</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <EditAnswer currentAnswer={answer.answer_body} answerId={answer._id} />
                    </div>
                  </div>
                </div>
              </div>
              {/* edit answer modal end */}
              <span className="fc-light mr2"><a href="#hello">follow</a></span> &nbsp;
            </div>
            <div className="col-4">
              <div className="font-weight-light text-secondary">
                <span title="2019-03-03 16:34:02Z" className="relativetime">{answer.answered_on}</span>
              </div>
              <div>
                <div class="user-gravatar32">
                  <img src={profile_url} alt="user avatar" width="32" height="32" className="bar-sm" /> &nbsp; <a href="#hello">{answer.answered}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <br />
    </>
  );
}

export default Answer;