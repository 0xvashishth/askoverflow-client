import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import $ from "jquery";
import "./script.js"
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
// import UserQuestion from "./userquestion";
import Questions from "./UserQuestions/Questions";
import Answers from "./UserAnswers/Answers";


const userprofile = () => {
  const [cookies] = useCookies(['user']);
  var imgforload = <img src="https://user-images.githubusercontent.com/76911582/196022890-ace53133-d1ec-49ae-83e0-45135f1116b4.gif" width="20px" alt="#img" />
  var imgforload1 = <img src="https://user-images.githubusercontent.com/76911582/196022890-ace53133-d1ec-49ae-83e0-45135f1116b4.gif" width="70px" alt="#img"/>
  const [userData = {}, setUserData] = useState(imgforload);
  const [loaderforwait, setloaderforwait] = useState(imgforload1);
  const [questioncount, setQuestionCount] = useState(imgforload);
  const [CountAnswer, setCountAnswer] = useState(imgforload);
  const history = useHistory();

  const callUserPage = async () => {
    try {
      const res = await fetch('https://askoverflow-server.vercel.app/user', {
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
      const userdata = await res.json();

      const userdataname = userdata.rootUser.username;
      userdata.rootUser.avatarlink = "https://avatars.dicebear.com/api/gridy/" + userdataname + ".svg"

      setUserData(userdata.rootUser);
      // setQuestionCount(userdata.allquestions);
      setloaderforwait();
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push('/');
    }
  }

  useEffect(() => {
    callUserPage();
  }, []);

  const toggleusermenu = () => {
    $(".sidebar").toggleClass("active");
  }
  const openPage = (event, pageName) => {
    var i, pagecontent;
    pagecontent = document.getElementsByClassName("Right-bar");
    for (i = 0; i < pagecontent.length; i++) {
      pagecontent[i].style.display = "none";
    }
    $(".nav-links li a").removeClass("active");
    var tempPageName = "#" + pageName;
    $(tempPageName).css("display", "block");
    event.currentTarget.className += " active";
  }

  return (
    <div>
      <div class="sidebar bg-primary">
        <div class="logo-details">
          <i class="fab fa-stack-overflow"></i>
          <a href="/home/" class="logo_name">AskOverflow</a>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#sidenav-links" class="active" onClick={event => openPage(event, 'contentName1')}>
              <i class="fas fa-tachometer-alt"></i>
              <span class="nav-1 links_name nav-tab active">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#sidenav-links" onClick={event => openPage(event, 'user_answers')}>
              <i class='fas fa-user' ></i>
              <span class="nav-2 links_name nav-tab">Your Answers</span>
            </a>
          </li>
          <li>
            <a href="#sidenav-links" onClick={event => openPage(event, 'user_questions')}>
              <i class="fas fa-question"></i>
              <span class="nav-3 links_name nav-tab" >Your Questions</span>
            </a>
          </li>
          <li>
            <a href="#sidenav-links" onClick={event => openPage(event, 'user_comments')}>
              <i class="fas fa-comments"></i>
              <span class="nav-4 links_name nav-tab" >Your Comments</span>
            </a>
          </li>
          <li>
            <a href="#sidenav-links" onClick={event => openPage(event, 'user_discussion')}>
              <i class="fas fa-comment"></i>
              <span class="nav-5 links_name nav-tab">Discussion</span>
            </a>
          </li>
          <li>
            <a href="#sidenav-links" onClick={event => openPage(event, 'user_teams')}>
              <i class="fas fa-user-friends"></i>
              <span class="nav-6 links_name nav-tab">Teams</span>
            </a>
          </li>
          <li>
            <a href="#sidenav-links" onClick={event => openPage(event, 'user_settings')}>
              <i class='fas fa-cog' ></i>
              <span class="nav-6 links_name nav-tab">Setting</span>
            </a>
          </li>
          <li>
            <a href="/logout">
              <i class="fas fa-arrow-alt-circle-left"></i>
              <span class="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class='fas fa-bars sidebarBtn' onClick={toggleusermenu}></i>
            <span class="dashboard">Profile</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <i class="fas fa-search"></i>
          </div>
          <div class="profile-details">
            <img src={userData.avatarlink} alt="#img" />
            <span class="admin_name">{userData.name}</span>
          </div>
        </nav>

        <div class="home-content Right-bar" id="contentName1">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Reputation</div>
                <div class="number">40</div>
                <div class="indicator">
                </div>
              </div>
              <i class='fas fa-users-cog cart'></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Answers</div>
                <div class="number">{CountAnswer}</div>
                <div class="indicator">
                </div>
              </div>
              <i class="fas fa-chalkboard-teacher cart two"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Questions</div>
                <div class="number">{questioncount}</div>
                <div class="indicator">
                </div>
              </div>
              <i class='fas fa-question cart three' ></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Visits</div>
                <div class="number">40</div>
                <div class="indicator">
                </div>
              </div>
              <i class='fas fa-eye cart four' ></i>
            </div>
          </div>

          <div class="container">

            <div class="row container">
              <div class="col-10 container">
                {loaderforwait}
              </div>
            </div>

          </div>

        </div>

        <div class="home-content Right-bar" id="user_answers" style={{ display: "none" }}>
          <Answers setCountAnswer={setCountAnswer}/>
        </div>

        <div class="home-content Right-bar" id="user_questions" style={{ display: "none" }}>
          <Questions setCountQuestion={setQuestionCount}/>
        </div>

        <div class="home-content Right-bar" id="user_comments" style={{ display: "none" }}>
          <div class="container">
            <h3>Comments</h3>
            <div class="row container">
              <div class="col-10 container">
              </div>
            </div>

          </div>
        </div>


        <div class="home-content Right-bar" id="user_discussion" style={{ display: "none" }}>
          <div class="container">
            <h3>Discussion</h3>
            <div class="row container">
              <div class="col-10 container">

              </div>
            </div>

          </div>
        </div>


        <div class="home-content Right-bar" id="user_teams" style={{ display: "none" }}>
          <h1>Hello Teams</h1>
        </div>


        <div class="home-content Right-bar" id="user_settings" style={{ display: "none" }}>
          <div className="container d-flex">
            <div className='row'>
              <div className="d-flex">
                <h4>Username:&nbsp; </h4> <h4> {userData.username}</h4>
              </div>
              <div className="d-flex">
                <h4>Email:&nbsp; </h4> <h4 className="danger"> {userData.email}</h4>
              </div>
            </div>
          </div>
        </div>


      </section>

    </div>
  );
}
// }

export default userprofile;