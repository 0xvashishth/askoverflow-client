import React, { Component, useState } from "react";
import ReactMarkdown from 'react-markdown'
// import React, { useState } from 'react'

import "./question.css";

const Answer = (props) => {
  const { key, answer } = props;
  const [markdownInput, setMarkdownInput] = useState()
  const profile_url = "https://avatars.dicebear.com/api/gridy/" + answer.answered + ".svg";
  return (
    <>
      <div class="row">
        <div class="col-1">
          <div>
            <a href="#up"><i class="fas fa-chevron-up"></i></a>
          </div>
          <div>{answer.liked_by.length}</div>
          <div>
            <a href="#down"><i class="fas fa-chevron-down"></i></a>
          </div>
          <div><i class="fa fa-check"></i></div>
        </div>
        <div class="col-10 bg-light text-dark">
          <div class="row">

            <div class="col-12">
              <ReactMarkdown children={answer.answer_body} />
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
                <span title="2019-03-03 16:34:02Z" class="relativetime">{answer.answered_on}</span>
              </div>
              <div>
                <div class="user-gravatar32">
                  <img src={profile_url} alt="user avatar" width="32" height="32" class="bar-sm" /> &nbsp; <a href="#hello">{answer.answered}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <br />
    </>
  );
}

export default Answer;