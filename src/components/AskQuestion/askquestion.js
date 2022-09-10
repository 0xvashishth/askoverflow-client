import React from "react";
import "./askquestion.css";

// let countloginsignup=0

const AskQuestion = (props) => {
  return (
    <div class="modal fade" id="askquestionmodal" tabindex="-1" aria-labelledby="askquestionmodal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen modal-xl ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="askquestionmodal"><i class="fab fa-stack-overflow"></i>&nbsp;&nbsp;Ask Question</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="question-header" class="col-form-label">Question Header</label>
                <input type="text" class="form-control" placeholder="Type A Question Header..." id="question-header" name="question-header" />
              </div>
              <div class="mb-3">
                <label for="question-tags" class="col-form-label">Question Tags</label>
                <input type="text" class="form-control" placeholder="If There Are Multiple, Saperate With Them With Commas..." id="question-tags" name="question-tags" />
              </div>
              <div class="mb-3">
                <label for="question-body" class="col-form-label">Question Body</label>
                <textarea class="form-control" rows="13" placeholder="Please Include Question Body..." id="question-body" name="question-body"></textarea>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Submit A Question</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AskQuestion };
