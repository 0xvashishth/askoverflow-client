import React from "react";
import "./Questions.css";
// import { Questions } from "../Questions/questions"
// import { useParams } from "react-router-dom";
// import $ from "jquery";
// import { useState } from "react";
// import { useCookies } from 'react-cookie';
// import axios from 'axios';


const UserQuestion = (props) => {
  const {question} = props;
  var isverified = "No";
  if(question.is_answer_verified){
    isverified = "Yes";
  }
  // const [currentA, setCurrentA] = useState(currentAnswer);
  // const [answerload, setanswerload] = useState("Update Your Answer");
  // const [cookies] = useCookies(['user']);
  // const { question_id } = useParams();
  // const jwttoken = cookies.jwttokenloginuser || "";

  // const changetextevent = (event) => {
  //   setCurrentA(event.target.value)
  // }

  // const EditAnswerServer = function() {
  //   // var textanswertopostvalue = $('.textanswertoedit').val();
  //   // console.log("herllo", jwttoken, textanswertopostvalue);
  //   if (currentA !== "") {
  //     setanswerload("Please Wait For A Moment...");
  //     axios.post('https://askoverflow-server.vashishth-patel.repl.co/answeredit', {
  //       answerid: answerId,
  //       body: currentA,
  //       jwttokenloginuser: jwttoken
  //     }).then(function(response) {
  //       console.log(response);
  //       window.location.replace("/question/" + question_id);
  //     }).catch(function(err){
  //       console.log(err);
  //       window.alert("Something Went Wrong!!");
  //     });
  //   }
  //   else {
  //     window.alert("no text available");
  //   }
  // }


  return (
    <>

      <tr>
        <th scope="row">
          <a href={`/question/${question._id}`}>{question.header}</a>
        </th>
        <td>
          {question.liked_by.length}
        </td>
        <td>
          {question.unliked_by.length}
        </td>
        <td>
          {question.answers.length}
        </td>
        <td>
          {question.views}
        </td>
        <td>
          {isverified}
        </td>
      </tr>   
    </>
  );
}
export default UserQuestion;