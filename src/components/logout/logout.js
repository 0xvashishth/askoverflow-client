import React from "react";
import { useCookies } from 'react-cookie';
import { Redirect } from "react-router-dom";

const logoutuser = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  if (cookies.jwttokenloginuser) {
    removeCookie('jwttokenloginuser', { path: "/" });
  }
  if (cookies.userid) {
    removeCookie('userid', { path: "/" });
  }
  return (
    <div>
      <h1>Logout</h1>
      <Redirect to="/" />
    </div>
  );
};



export default logoutuser;