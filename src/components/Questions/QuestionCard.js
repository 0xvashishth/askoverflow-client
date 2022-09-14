import React from 'react';
import { Link } from 'react-router-dom';
import './questions.css';
import TextTruncate from 'react-text-truncate';
import fox from "./fox.jpg";

const QuestionCard = (props) => {
  const questionsresponse = props.question;

  return (
    <div>
      <div class="row">
        <div class="col-md-2 commenttagview">
          <div class="paracomment float-center">2 comments</div>
          <div class="paracommentbadge float-center badge badge-success">4 answers</div>
          <div class="paracomment float-center">{questionsresponse.tags.length} Tags</div>
          <div class="paracomment float-center">36 views</div>
        </div>

        <div class="col-md-10">
          <div class="row">
            <div class="row">
              <a href="#header" class="header-question text-primary" style={{ textDecoration: "none" }}><TextTruncate line={2} text={questionsresponse.body} /></a>
            </div>
            <div class="row">
              <div class="col-8">
                <a href="#badge" class="badge badge-pad">{questionsresponse.tags[0]}</a>&nbsp;
                <a href="#badge" class="badge badge-pad">{questionsresponse.tags[1]}</a>&nbsp;
                <a href="#badge" class="badge badge-pad">{questionsresponse.tags[2]}</a>&nbsp;
                <a href="#badge" class="badge badge-pad">{questionsresponse.tags[3]}</a>&nbsp;
              </div>
              <div class="col-4">
                <div class="d-flex">
                  <img
                    width="20"
                    height="20"
                    alt="focximg"
                    class="" style={{ borderRadius: "10px" }} src={fox} />&nbsp;
                  <a class="avatarusername" href="#avatarlink" style={{ textDecoration: "none" }}><span class="avatarname">{questionsresponse.author}</span></a>&nbsp;<div class="daysagocss">
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

  )
};

export default QuestionCard;