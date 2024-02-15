import React, { Component } from 'react';
import './questions.css';
import axios from 'axios';
import QuestionCard from './QuestionCard';
import $ from "jquery";

var incount = 0;

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }
  componentDidMount() {
    if (incount === 0) {
      $('.questionclass').append(
        $('<img>').prop({
          src: 'https://user-images.githubusercontent.com/76911582/190166775-b792861c-f01f-4a69-b406-e08a0adf0fd0.gif',
          className: 'toremovegif',
        }).css({ "position": "relative", "height": "200px", "margine-left": "280px" })
      );
    }
    incount++;



    axios
      .get('https://askoverflow-server.vercel.app/publicquestionsget')
      .then(res => {
        this.setState({
          questions: res.data
        })
        var total = res.data.length;
        this.props.onhandleCountChange(total, res.data[total - 1].counttags);
      })
      .catch(err => {
        console.log(err);
      })
  };


  render() {

    // var imgloader = <img src="https://user-images.githubusercontent.com/76911582/190159611-d2622427-1058-4cc2-bf75-4b56f2be65b2.gif" />
    // var changeloader = document.getElementsByClassName("questionclass");

    const questions = this.state.questions;
    let questionList = [];

    if (!questions) {
      questionList = "No questions are found!";
    } else {
      questionList = questions.map((questions, k) =>
        <QuestionCard question={questions} key={k} />
      );
      $(".toremovegif").remove();
    }
    return (
      <div className="questionclass">{questionList}</div>
    );
  }
}

export default Questions;