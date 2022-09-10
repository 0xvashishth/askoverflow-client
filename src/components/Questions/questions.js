import React from 'react';
import './questions.css';
import fox from "./fox.jpg";
import TextTruncate from 'react-text-truncate';

const Questions = (props) => {
    // const  book  = props.book;
    var repeatQuestions = [];
    for(var i=0;i<8;i++){
    repeatQuestions[i] = <div>
        <div class="row">
                <div class="col-md-2 commenttagview">
                    <div class="paracomment float-center">2 comments</div>
                    <div class="paracommentbadge float-center badge badge-success">4 answers</div>
                    <div class="paracomment float-center">3 tags</div>
                    <div class="paracomment float-center">36 views</div>
                </div>

                <div class="col-md-10">
                    <div class="row">
                        <div class="row">
                        <a href="#header" class="header-question text-primary" style={{textDecoration: "none"}}><TextTruncate line={2} text="Lorem this is not the right answer the things with is remaining Ipsum is simply dummy text of the printing and typesetting industry."/></a>
                        </div>
                        <div class="row">
                                <div class="col-8">
                                    <a href="#badge" class="badge badge-pad">html</a>&nbsp;
                                    <a href="#badge" class="badge badge-pad">javascript</a>&nbsp;
                                    <a href="#badge" class="badge badge-pad">ajax</a>&nbsp;
                                </div>
                                <div class="col-4">
                                    <div class="d-flex">
                                      <img 
                                      width="20"
                                      height="20"
                                      alt="focximg"
                                      class="" style={{borderRadius: "10px"}} src={fox} />&nbsp;
                                      <a class="avatarusername" href="#avatarlink" style={{textDecoration: "none"}}><span class="avatarname">vasu</span></a>&nbsp;<div class="daysagocss">
                                      asked 14 days ago
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
              </div>
              <hr/>
              </div>

          }

	return(repeatQuestions)
};

export {Questions};