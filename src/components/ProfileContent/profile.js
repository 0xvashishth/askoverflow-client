import React from 'react';
import './profile.css';

const Profileinsmall = (props) => {
    // const  book  = props.book;

    return(
        <div class="dropdown d-md-none d-lg-none d-xl-none">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="30"
                  height="30"
                  alt="avatar"
                  class="rounded-circle"
                />
                
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button class="dropdown-item" type="button">
                    Profile
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    My Questions
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    My Answers
                  </button>
                </li>
              </ul>
            </div>
    )
};

const Profileinlarge1 = (props) => {
    // const  book  = props.book;

    return(
        <div class="dropdown .d-lg-none .d-xl-block">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="30"
                  height="30"
                  alt="avatar"
                  class="rounded-circle"
                />
                
              </button>
              <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenu2">
                <li>
                  <button class="dropdown-item" type="button">
                    Profile
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    My Questions
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    My Answers
                  </button>
                </li>
              </ul>
            </div>
    )
};

export {Profileinsmall, Profileinlarge1};