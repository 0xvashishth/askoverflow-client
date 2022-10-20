import React from "react";
import "./question.css";
// import { Questions } from "../Questions/questions"
// import { useParams } from "react-router-dom";
// import $ from "jquery";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';

const EditQuestion = (props) => {
  const { questionHeader, questionTags, questionBody, questionId } = props;
  const [cookies] = useCookies(['user']);
  // console.log(questionHeader,questionTags,questionBody);
  // var hello = questionHeader
  const [qheader, setQheader] = useState(questionHeader);
  const [qtags, setQtags] = useState(questionTags);
  const [qbody, setQbody] = useState(questionBody);
  const [qid, setQid] = useState(questionId);
  const [answerload, setanswerload] = useState("Update Your Question");
  // console.log(qheader);
  var jwttoken = cookies.jwttokenloginuser || "";

  // This will render only for once, because the props are set initially undefined
  useEffect(() => { setQheader(questionHeader); setQtags(questionTags); setQbody(questionBody); setQid(questionId); }, [questionHeader,questionTags,questionBody,questionId] )
  
  const editQHeader = (event) => {
    setQheader(event.target.value)
  }
  const editQTags = (event) => {
    setQtags(event.target.value)
  }
  const editQBody = (event) => {
    setQbody(event.target.value)
  }

    const EditQuestionServer = function() {
    // var textanswertopostvalue = $('.textanswertoedit').val();
    // console.log("herllo", jwttoken, textanswertopostvalue);
    if (editQHeader !== "" || editQBody !== "") {
      var arraytags = qtags.split(',');
      console.log(qid,qbody,jwttoken,arraytags,editQHeader)
      setanswerload("Please Wait For A Moment...");
      axios.post('https://askoverflow-server.vashishth-patel.repl.co/questionedit', {
        questionid: qid,
        body: qbody,
        jwttokenloginuser: jwttoken,
        tags: arraytags,
        header: qheader
      }).then(function(response) {
        console.log(response);
        window.location.replace("/question/" + qid);
      }).catch(function(err){
        console.log(err);
        window.alert("Something Went Wrong!!");
      });
    }
    else {
      window.alert("All Fields Are Required!");
    }
  }
  
  return (
    <>
      <div class="modal-dialog modal-dialog-centered modal-fullscreen modal-xl ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="askquestionmodal"><i class="fab fa-stack-overflow"></i>&nbsp;&nbsp;Edit Your Question</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="editQuestion-header" class="col-form-label">Question Header</label>
                <input type="text" value={qheader} onChange={editQHeader} class="form-control" placeholder="Type A Question Header..." id="editQuestion-header" name="editQuestion-header" />
              </div>
              <div class="mb-3">
                <label for="editQuestion-tags" class="col-form-label">Question Tags</label>
                <input type="text" value={qtags} onChange={editQTags} class="form-control" placeholder="If There Are Multiple, Saperate With Them With Commas..." id="editQuestion-tags" name="editQuestion-tags" />
              </div>
              <div class="mb-3">
                <label for="editQuestion-body" class="col-form-label">Question Body</label>
                <textarea value={qbody} onChange={editQBody} class="form-control" rows="13" placeholder="Please Include Question Body..." id="editQuestion-body" name="editQuestion-body"></textarea>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" onClick={EditQuestionServer} class="btn btn-primary">{answerload}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditQuestion;