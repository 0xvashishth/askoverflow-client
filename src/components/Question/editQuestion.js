import React from "react";
import "./question.css";
// import { Questions } from "../Questions/questions"
import { useParams } from "react-router-dom";
import $ from "jquery";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';

const EditQuestion = (props) => {
  const { questionHeader, questionTags, questionBody } = props;
  console.log(questionHeader,questionTags,questionBody);
  // var hello = questionHeader
  const [qheader, setQheader] = useState(questionHeader);
  const [qtags, setQtags] = useState(questionTags);
  const [qbody, setQbody] = useState(questionBody);
  console.log(qheader);

  // This will render only for once, because the props are set initially undefined
  useEffect(() => { setQheader(questionHeader); setQtags(questionTags); setQbody(questionBody)}, [questionHeader,questionTags,questionBody] )
  
  const editQHeader = (event) => {
    setQheader(event.target.value)
  }

  const editQTags = (event) => {
    setQtags(event.target.value)
  }

  const editQBody = (event) => {
    setQbody(event.target.value)
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
            <button type="button" class="btn btn-primary">Update A Question</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditQuestion;