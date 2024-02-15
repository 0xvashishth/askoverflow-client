import React from "react";
import "./Questions.css";
// import { Questions } from "../Questions/questions"
// import { useParams } from "react-router-dom";
// import $ from "jquery";
import { useEffect,useState } from "react";
import { useCookies } from 'react-cookie';
// import axios from 'axios';
import { useHistory } from "react-router-dom";
import UserQuestion from "./userquestion";


const Questions = (props) => {
  // const {question} = props;
  var {setCountQuestion} = props;
  const history = useHistory();
  const [cookies] = useCookies(['user']);
    var imgforload1 = <img src="https://user-images.githubusercontent.com/76911582/196022890-ace53133-d1ec-49ae-83e0-45135f1116b4.gif" width="70px" alt="#img" />
  // console.log(question)
  const [AllQuestions, setAllQuestions] = useState(imgforload1);
  // var AllQuestion
  // if(question.type != 'img'){
  //  AllQuestion = question.map(ans => <UserQuestion question={ans} />);
  // }
  // const jwttoken = cookies.jwttokenloginuser || "";

  const QuestionDataGet = async () => {
        try {
          const res = await fetch('https://askoverflow-server.vercel.app/getuserquestion', {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              jwttokenloginuser: cookies.jwttokenloginuser
            }),
            creadentials: "include"
          });
          const responsedata = await res.json();
          const allquestion = responsedata.map(ans => <UserQuestion question={ans} />);
          setAllQuestions(allquestion);
          setCountQuestion(allquestion.length);
        } catch (err) {
          console.log(err);
          history.push('/');
        }
      }
  
  useEffect(() => {
    QuestionDataGet();
  }, []);
  
  // const changetextevent = (event) => {
  //   setCurrentA(event.target.value)
  // }

  // const EditAnswerServer = function() {
  //   // var textanswertopostvalue = $('.textanswertoedit').val();
  //   // console.log("herllo", jwttoken, textanswertopostvalue);
  //   if (currentA !== "") {
  //     setanswerload("Please Wait For A Moment...");
  //     axios.post('https://askoverflow-server.vercel.app/answeredit', {
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
      <div class="container">
            <h3>My Questions</h3>
            <br></br>
            <table class="table table-responsive table-bordered">
              <thead>
                <tr>
                  <th scope="col">Question</th>
                  <th scope="col">Up Votes</th>
                  <th scope="col">Down Votes</th>
                  <th scope="col">Total Answers</th>
                  <th scope="col">Total Views</th>
                  <th scope="col">Verified Answer?</th>
                </tr>
              </thead>
                <tbody>
                  {AllQuestions}
                  </tbody>
              </table>
          </div>
  );
}
export default Questions;