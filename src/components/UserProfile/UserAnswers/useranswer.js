import React from "react";
import "./Answers.css";
// import { Questions } from "../Questions/questions"
// import { useParams } from "react-router-dom";
// import $ from "jquery";
// import { useState } from "react";
// import { useCookies } from 'react-cookie';
// import axios from 'axios';


const UserAnswer = (props) => {
  const {answer} = props;
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
          <a href={`/question/${answer.questionId}`}>click here</a>
        </th>
        <td>
          {answer.answer_body}
        </td>
        <td>
          {answer.liked_by.length}
        </td>
        <td>
          {answer.unliked_by.length}
        </td>
        <td>
          {answer.is_verified}
        </td>
      </tr>   
    </>
  );
}
export default UserAnswer;