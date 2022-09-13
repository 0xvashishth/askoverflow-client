import React from "react";
import { useCookies } from 'react-cookie';
// import { Redirect } from 'react-router';
// import { Navigate } from 'react-router-dom';
import { Redirect, useLocation } from "react-router-dom";


const logoutuser = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  if (cookies.jwttokenloginuser) {
    removeCookie("jwttokenloginuser");
    // const goLogin = () => history.push('/')
  }

  return (
    <div>
      <h1>Logout</h1>
      <Redirect to="/" />
    </div>
  );
};



export default logoutuser;