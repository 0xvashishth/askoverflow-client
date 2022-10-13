import React, { Component } from "react";
import "./homepage.css";
import $ from "jquery";

class Sidebar extends Component {

  constructor(props) {
    super(props);
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
    return (
            <div class="col-sm-3 col-md-2 d-none d-sm-block">
              <div class="just-padding">
                <div class="list-group list-group-flush bg-light bg-gradient">
                  <a
                    href="/"
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
    );
  }
}

export default Sidebar;
