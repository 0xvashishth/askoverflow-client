import React from 'react';
import './questions.css';
import TextTruncate from 'react-text-truncate';

const QuestionCard = (props) => {
  const questionsresponse = props.question;
  const userdataname = questionsresponse.username;
  // console.log(questionsresponse.id);
  var avatarlink = "https://avatars.dicebear.com/api/gridy/" + userdataname + ".svg"
  return (
    <>
      <div class="row">
        <div class="col-md-2 commenttagview">
          <div class="paracomment float-center">{questionsresponse.answer_count} comments</div>
          <div class="paracommentbadge float-center badge badge-success">{questionsresponse.answer_count} answers</div>
          <div class="paracomment float-center">{questionsresponse.tags.length} Tags</div>
          <div class="paracomment float-center">{questionsresponse.views} views</div>
        </div>

        <div class="col-md-10">
          <div class="row">
            <div class="row">
              <a href={`/question/${questionsresponse.id}`} class="header-question text-primary" style={{ textDecoration: "none" }}><TextTruncate line={2} text={questionsresponse.header} /></a>
              <div className="header-question">
                <TextTruncate line={3} text={questionsresponse.body} className="bodytruncate" />
              </div>
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
                    class="" style={{ borderRadius: "10px" }} src={avatarlink} />&nbsp;
                  <a class="avatarusername" href="#avatarlink" style={{ textDecoration: "none" }}><span class="avatarname">{questionsresponse.author}</span></a>&nbsp;<div class="daysagocss">
                    asked {questionsresponse.posted_on}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>

  )
};

export default QuestionCard;