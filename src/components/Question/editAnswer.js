import React from "react";
import "./question.css";
// import { Questions } from "../Questions/questions"
import { useParams } from "react-router-dom";
// import $ from "jquery";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';


const EditAnswer = (props) => {
  const {currentAnswer, answerId} = props;
  const [currentA, setCurrentA] = useState(currentAnswer);
  const [answerload, setanswerload] = useState("Update Your Answer");
  const [cookies] = useCookies(['user']);
  const { question_id } = useParams();
  const jwttoken = cookies.jwttokenloginuser || "";

  const changetextevent = (event) => {
    setCurrentA(event.target.value)
  }

  const EditAnswerServer = function() {
    // var textanswertopostvalue = $('.textanswertoedit').val();
    // console.log("herllo", jwttoken, textanswertopostvalue);
    if (currentA !== "") {
      setanswerload("Please Wait For A Moment...");
      axios.post('https://askoverflow-server.vashishth-patel.repl.co/answeredit', {
        answerid: answerId,
        body: currentA,
        jwttokenloginuser: jwttoken
      }).then(function(response) {
        console.log(response);
        window.location.replace("/question/" + question_id);
      }).catch(function(err){
        console.log(err);
        window.alert("Something Went Wrong!!");
      });
    }
    else {
      window.alert("no text available");
    }
  }


  return (
    <>
      <div class="bottom-margin">
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


            <textarea name="editAnserTextarea" rows="8" class="col-12 textanswertoedit" placeholder="Give your answer" value={currentA} onChange={changetextevent} required>
            </textarea>
            <button type="button" class="btn btn-warning col-4" data-dismiss="modal">Close</button>
            <button onClick={EditAnswerServer} class="btn btn-primary col-7 offset-1" >{answerload}</button>

          </div>
        </div>

      </div>
    </>
  );
}
export default EditAnswer;