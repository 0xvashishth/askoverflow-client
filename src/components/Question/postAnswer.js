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


const AnswerPost = (props) => {
  const [answerload, setanswerload] = useState("Post Your Answer");
  const [cookies] = useCookies(['user']);
  const { question_id } = useParams();
  const jwttoken = cookies.jwttokenloginuser || "";
  var buttonforanswer = <button onClick={PostAnswerServer} class="btn btn-primary col-12" >{answerload}</button>

  if (jwttoken !== "") {
    buttonforanswer = <button onClick={PostAnswerServer} class="btn btn-primary col-12" >{answerload}</button>
  } else {
    buttonforanswer = <button class="float-right btnaskquestion btn btn-secondary" data-toggle="modal" data-target="#loginModal">Login To Ask Question</button>
  }

  const PostAnswerServer = function() {
    var textanswertopostvalue = $('.textanswertopost').val();
    console.log("herllo", jwttoken, textanswertopostvalue);
    if (textanswertopostvalue !== "") {
      setanswerload("Please Wait For A Moment...");
      axios.post('https://askoverflow-server.vashishth-patel.repl.co/answerpost', {
        questionid: question_id,
        body: textanswertopostvalue,
        jwttokenloginuser: jwttoken
      }).then(function(response) {
        console.log(response);
        window.location.replace("/question/" + question_id);
      });
    }
    else {
      console.log("no text available");
    }
  }
  return (
    <>
      <div class="bottom-margin">
        <h3>Your Answer</h3>
        <div class="col-12 border-post-answer">
          <section id="header-strip">
            <ul>
              <li><i class="fa fa-bold" aria-hidden="true"></i></li>
              <li><i class="fa fa-italic" aria-hidden="true"></i></li>
              <li><i class="fa fa-underline" aria-hidden="true"></i></li>
              <li><i class="fa fa-header" aria-hidden="true"></i></li>
              <li><i class="fa fa-indent" aria-hidden="true"></i></li>
              <li><i class="fa fa-list-ol" aria-hidden="true"></i></li>
              <li><i class="fa fa-list-ul" aria-hidden="true"></i></li>
              <li><i class="fa fa-clipboard" aria-hidden="true"></i></li>
              <li><i class="fa fa-link" aria-hidden="true"></i></li>
              <li><i class="fa fa-font" aria-hidden="true"></i></li>
              <li><i class="fa fa-undo" aria-hidden="true"></i></li>
              <li><i class="fa fa-files-o" aria-hidden="true"></i></li>
            </ul>
          </section>
        </div>
        <div class="row">
          <div class="col-12">


            <textarea rows="8" class="col-12 textanswertopost" placeholder="Give your answer" required>
            </textarea>
            {buttonforanswer}

          </div>
        </div>

      </div>
    </>
  );
}
export default AnswerPost;