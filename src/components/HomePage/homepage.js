import React, { Component } from "react";
import "./homepage.css";
import { NavForHome } from "../NavBar/NavBar";
import { SideFeatured } from "../SideFeatured/sidefeatured"
import Questions from "../Questions/questions"
import { AskQuestion } from "../AskQuestion/askquestion"
import $ from "jquery";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class homepage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      jwttokenloginusercookie: cookies.get('jwttokenloginuser') || ""
    };
  }

  jquerychangecss = () => {
    $(".clickleftmenu").click(function() {
      $(".clickleftmenu")
        .css("color", "black")
        .css("border", "none")
        .css("background", "none");
    });
    $(".clickleftmenu").on("click", function() {
      var takenid = this.id;
      var str = `#${takenid}`;
      $(str)
        .css("color", "#007bff")
        .css("border-right", "5px solid #007bff")
        .css("background", "")
        .removeClass("bg-light")
        .addClass("bg-sec");
    });
  };

  initialcss = () => {
    $("document").ready(function() {
      $("#clickleftmenu1")
        .css("color", "#007bff")
        .css("border-right", "5px solid #007bff")
        .removeClass("bg-light")
        .addClass("bg-sec");
    });
  };

  componentDidMount() {
    this.jquerychangecss();
    this.initialcss();
  }

  render() {
    const { jwttokenloginusercookie } = this.state;

    let askquestionsign;
    if (jwttokenloginusercookie != "") {
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
            <div class="col-sm-3 col-md-2 d-none d-sm-block">
              <div class="just-padding">
                <div class="list-group list-group-flush bg-light bg-gradient">
                  <a
                    href="#item1"
                    class="list-group-item clickleftmenu bg-light bg-gradient"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                    id="clickleftmenu1"
                  >
                    Home
                  </a>

                  <div
                    class="list-group-item clickleftmenu bg-light bg-gradient"
                    // data-toggle="collapse"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                    id="clickleftmenu2"
                  >
                    PUBLIC
                  </div>
                  <div
                    class="list-group list-group-flush bg-light bg-gradient"
                    id="item-3"
                  >
                    <a
                      href="#item31"
                      id="clickleftmenu3"
                      style={{ textDecoration: "none" }}
                      class=" clickleftmenu list-group-item bg-light bg-gradient"
                    >
                      <i class="fas fa-globe-africa"></i>Questions
                      <span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a
                      href="#item32"
                      id="clickleftmenu4"
                      style={{ textDecoration: "none" }}
                      class="clickleftmenu list-group-item bg-light bg-gradient"
                    >
                      <i class="fas fa-tags"></i>Tags
                      <span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a
                      href="#item33"
                      id="clickleftmenu5"
                      style={{ textDecoration: "none" }}
                      class="clickleftmenu list-group-item bg-light bg-gradient"
                    >
                      <i class="fas fa-users"></i>Users
                      <span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a
                      href="#item33"
                      id="clickleftmenu6"
                      style={{ textDecoration: "none" }}
                      class="clickleftmenu list-group-item bg-light bg-gradient"
                    >
                      <i class="fas fa-briefcase"></i>Jobs
                      <span class="badge countbadge badge-primary">9</span>
                    </a>
                  </div>
                  <a
                    href="#item1"
                    class="list-group-item clickleftmenu bg-light bg-gradient"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                    id="clickleftmenu7"
                  >
                    Teams
                  </a>
                </div>
              </div>
            </div>
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
                      <h4 class="countallquesion">38 Questions</h4>
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


                  <Questions />

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
