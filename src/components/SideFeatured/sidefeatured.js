import React from 'react';
import "./sidefeatured.css"

const SideFeatured = (props) => {
    // const  book  = props.book;
        var well={
            boxShadow: "2px 1px 2px 1px #9E9E9E"
        }
    return(
      <div>
        <div class="list-group" style={well}>
                <div class="list-group-item anchorsideheader flex-column align-items-start">
                  <div class="d-flex w-100  justify-content-between">
                    
                    <small>The Overflow Blog</small>
                  </div>
                  
                </div>
                <div class="backcontentofheaderside list-group-item flex-column align-items-start">
                  <a href="#questions"><i class="fas fa-pencil-alt"></i><small class="text-muted">Donec id elit non mi porta.</small></a><br/><br/>
                  <a href="#questions"><i class="fas fa-pencil-alt"></i><small class="text-muted">Donec id elit non mi porta.</small></a>
                </div>
                <div class="anchorsideheader list-group-item flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    
                    <small>The Featured Questions</small>
                  </div>
                  
                </div>
                <div class="backcontentofheaderside list-group-item flex-column align-items-start" >
                  <a href="#questions"><i class="fab fa-stack-overflow"></i><small class="text-muted">Whats your name ?</small></a><br/><br/>
                  <a href="#questions"><i class="fab fa-stack-overflow"></i><small class="text-muted">Whats your college name where you are studying ?</small></a><br/><br/>
                  <a href="#questions"><i class="fas fa-comment-alt"></i><small class="text-muted">Where are you from ?</small></a><br/><br/>
                  <a href="#questions"><i class="fas fa-comment-alt"></i><small class="text-muted">Where are the statue of liberty situated ?</small></a><br/>
                </div>
                <div class="anchorsideheader list-group-item flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    
                    <small>Hot on Meta</small>
                  </div>
                  
                </div>
                <div class="backcontentofheaderside list-group-item flex-column align-items-start">
                  <a href="#questions"><i class="fas fa-pencil-alt"></i><small class="text-muted">Changing initializer-list tag wiki</small></a><br/><br/>
                  <a href="#questions"><i class="fas fa-pencil-alt"></i><small class="text-muted">Changing initializer-list tag wiki</small></a>
                </div>
              </div>

          <div class="list-group secondsidefeature" style={well}>
                <div class="anchorsideheadersecond list-group-item flex-column align-items-start" >
                  <div class="d-flex w-100 justify-content-between">
                    
                    <small>Custom Filter</small>
                  </div>
                  
                </div>
                <div class="anchorsideheadersecondanswer list-group-item flex-column align-items-start">
                  <a href="#questions"><i class="fas fa-filter"></i><small class="text-muted">Create your custom filter.</small></a>
                  </div>
          </div>

          <div class="list-group secondsidefeature" style={well}>
                <div class="anchorsideheadersecond list-group-item flex-column align-items-start" >
                  <div class="d-flex w-100 justify-content-between">
                    
                    <small>Ignored Tags</small>
                  </div>
                  
                </div>
                <div class="justify-content-center d-flex list-group-item">
                  <a href="#questions" class="btn anchorsideheadersecondanswerbtn border-secondary"><small class="text-muted">Add an ignored tag</small></a>
                </div>
          </div>
          
        </div>

    )
};

export {SideFeatured};