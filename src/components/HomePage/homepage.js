import React, { Component } from "react";
import "./homepage.css";
import { NavForHome } from "../NavBar/NavBar";
import { SideFeatured } from "../SideFeatured/sidefeatured"
import Questions from "../Questions/questions"
import { AskQuestion } from "../AskQuestion/askquestion"
import $ from "jquery";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Sidebar from './sidebar.js';

class homepage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  state = {
    total_question: 0,
    total_tags: 0
  }

  handleCountChange = (data,  tagscount) => {
    this.setState({ total_question: data  ,total_tags: tagscount  })     
    console.log(data, tagscount);
  }

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      jwttokenloginusercookie: cookies.get('jwttokenloginuser') || ""
    };
  }

  render() {
    const { jwttokenloginusercookie, total_question  ,total_tags} = this.state;

    let askquestionsign;
    if (jwttokenloginusercookie !== "") {
      askquestionsign = <div> <button class="btnaskquestion btn btn-secondary" data-bs-toggle="modal" data-bs-target="#askquestionmodal">Ask Question</button> <AskQuestion /> </div>
    } else {
      askquestionsign = <button class="btnaskquestion btn btn-secondary" data-toggle="modal" data-target="#loginModal">Login To Ask Question</button>
    }

    return (
      <div>
        <NavForHome />
        {/* Grid System for questions */}
        <div class="maincontent">
          <div class="row">
            {/*first grid*/}
            <Sidebar questioncount={this.state.total_question}  tagscount={this.state.total_tags}/>
            {/*second grid*/}
            <div class="col-sm-9 col-md-10 col-12 bgmoredark cssforpadTomaincontent">
              <div class="row">
                <div class="col-lg-8">
                  <div class="row margquesions">
                    <div class="col-7 col-xl-9 col-lg-8 col-md-7">
                      <h3 class="allquesionhead">Top Questions</h3>
                    </div>
                    <div class="col-5 col-xl-3 col-lg-4 col-md-5">
                      {askquestionsign}
                    </div>
                  </div>

                  <div class="row margquesions1">
                    <div class="col-lg-4 col-xl-6 col-md-3">
                      <h4 class="countallquesion">{total_question} Questions</h4>
                    </div>
                    <div class="col-lg-5 col-xl-5 col-md-6">
                      <div class="row">
                        <ul class="list-group list-group-horizontal">
                          <a href="#homepagelink" class="categoryonmaincontent list-group-item active list-group-item-action border border-secondary">Newest</a>
                          <a href="#homepagelink" class="categoryonmaincontent list-group-item d-flex align-items-center list-group-item-action border border-secondary"><span class="badge badge-secondary">15</span>&nbsp;&nbsp;Top</a>
                          <a href="#homepagelink" class="categoryonmaincontent list-group-item list-group-item-action border border-secondary">Views</a>
                          <a href="#homepagelink" class="categoryonmaincontent list-group-item list-group-item-action border border-secondary">Oldest</a>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />


                  <Questions onhandleCountChange={this.handleCountChange} />

                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link" href="#homepagelink" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#1">1</a></li>
                      <li class="page-item"><a class="page-link" href="#1">2</a></li>
                      <li class="page-item"><a class="page-link" href="#1">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#homepagelink">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col-lg-4 bgmoredark">
                  <br />
                  <SideFeatured />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(homepage);
