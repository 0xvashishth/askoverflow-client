import React, { Component } from "react";
import "./question.css";
import { NavForHome } from "../NavBar/NavBar";
import { SideFeatured } from "../SideFeatured/sidefeatured"
import { Questions } from "../Questions/questions"
import { AskQuestion } from "../AskQuestion/askquestion"
import $ from "jquery";

class Question extends Component {
  render() {
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
                      <h1 itemprop="name" class="fs-headline1 ow-break-word mb8 flex--item fl1">
                        <a href="/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router" class="question-hyperlink">What is the best way to redirect a page using React Router? [closed]
                        </a>
                      </h1>
                    </div>
                    <div class="col-5 col-xl-3 col-lg-4 col-md-5">
                      <button class="btnaskquestion btn btn-secondary" data-bs-toggle="modal" data-bs-target="#askquestionmodal">Ask Question</button>
                      <AskQuestion />
                    </div>
                  </div>
                  <div class="row margquesions">
                    <div class="col-12">
                      <span class="fc-light mr2">Asked</span> &nbsp;
                      <span class="fc-dark mr2">5 years, 1 month ago</span> | &nbsp;
                      <span class="fc-light mr2">Modified</span> &nbsp;
                      <span class="fc-dark mr2">1 year, 2 months ago</span> | &nbsp;
                      <span class="fc-light mr2">Viewed</span> &nbsp;
                      <span class="fc-dark mr8">404k times</span>
                    </div>
                  </div>
                  <hr />

                  <div class="row margquesions1">
                    <div class="col-1"></div>
                    <div class="col-10">
                      <p>Extra Content</p>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                      </p>
                    </div>
                    <div class="col-1"></div>
                  </div>
                  <hr />

                  <div class="row margquesions1">
                    <div class="col-8">
                      <h3>{10} Answers:</h3>
                    </div>

                    <div class="col-3 ">
                      <div class="row">
                        <div class="col-6">
                          sorted by
                        </div>
                        <div class="col-6">
                          <select>
                            <option>ascending</option>
                            <option>Most votes</option>
                            <option>descending</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div>
                    {/*first answer*/}
                    <div class="row">
                      <div class="col-1">
                        <div>
                          <a href="#"><i class="fas fa-chevron-up"></i></a>
                        </div>
                        <div>{5}</div>
                        <div>
                          <a href="#"><i class="fas fa-chevron-down"></i></a>
                        </div>
                        <div><i class="fa fa-check"></i></div>
                      </div>
                      <div class="col-10 bg-light text-dark">
                        <div class="row">

                          <div class="col-10">
                            <p>
                              Why do we use it?
                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-7">
                            <span class="fc-light mr2"><a href="#">share</a></span> &nbsp;
                            <span class="fc-light mr2"><a href="#">edit</a></span> &nbsp;
                            <span class="fc-light mr2"><a href="#">follow</a></span> &nbsp;
                          </div>
                          <div class="col-5">
                            <div class="font-weight-light text-secondary">
                              answered <span title="2019-03-03 16:34:02Z" class="relativetime">Mar 3, 2019 at 16:34</span>
                            </div>
                            <div>
                              <div class="user-gravatar32">
                                <img src="https://graph.facebook.com/100001761656850/picture?type=large" alt="user avatar" width="32" height="32" class="bar-sm" /> &nbsp; <a href="#">d.poriya</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-1"></div>
                    </div>
                    <br />
                    <br />
                    {/* second answer */}
                    <div class="row answerm">
                      <div class="col-1">
                        <div>
                          <a href="#"><i class="fas fa-chevron-up"></i></a>
                        </div>
                        <div>{5}</div>
                        <div>
                          <a href="#"><i class="fas fa-chevron-down"></i></a>
                        </div>
                        {/* <div><i class="fa fa-check"></i></div> */}
                      </div>
                      <div class="col-10 bg-light text-dark">
                        <div class="row">

                          <div class="col-10">
                            <p>
                              Why do we use it?
                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-7">
                            <span class="fc-light mr2"><a href="#">share</a></span> &nbsp;
                            <span class="fc-light mr2"><a href="#">edit</a></span> &nbsp;
                            <span class="fc-light mr2"><a href="#">follow</a></span> &nbsp;
                          </div>
                          <div class="col-5">
                            <div class="font-weight-light text-secondary">
                              answered <span title="2019-03-03 16:34:02Z" class="relativetime">Mar 3, 2019 at 16:34</span>
                            </div>
                            <div>
                              <div class="user-gravatar32">
                                <img src="https://graph.facebook.com/100001761656850/picture?type=large" alt="user avatar" width="32" height="32" class="bar-sm" /> &nbsp; <a href="#">d.poriya</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-1"></div>
                    </div>
                  </div>

                  <hr />


                  <div class="bottom-margin">
                    <h3>Your Answer</h3>
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
                        <form >

                          <textarea rows="8" class="col-12" placeholder="Give your answer">
                          </textarea>
                          <button type="submit" class="btn btn-primary col-12" >Post Your Answer</button>
                        </form>
                      </div>
                    </div>

                  </div>
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
export default Question;