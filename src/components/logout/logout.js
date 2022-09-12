import React from "react";
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router';


const logoutuser = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  if (cookies.jwttokenloginuser) {
    removeCookie("jwttokenloginuser");
    // const goLogin = () => history.push('/')
  }

  return (
    <div>
      <h1>Logout</h1>
      <Redirect to='/' />
    </div>
  );
};



export default logoutuser;