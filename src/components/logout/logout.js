import React, {useEffect} from "react";
import { useCookies } from 'react-cookie';
import { Redirect } from "react-router-dom";

const logoutuser = (props) => {
  const [ removeCookie] = useCookies(['user']);
  // if (cookies.jwttokenloginuser) {
  //   removeCookie('jwttokenloginuser', { path: "/" });
  //   console.log("This is removed!");
  // }
  // if (cookies.userid) {
  //   removeCookie('userid', { path: "/" });
  //   console.log("This is useris removed!");
  // }

  useEffect(() => {

  if (cookies.jwttokenloginuser) {
    removeCookie('jwttokenloginuser', '');
  }
  if (cookies.userid) {
     removeCookie('userid', '');
  }
}, []);

  
  return (
    <div>
      <h1>Logout</h1>
      <Redirect to="/" />
    </div>
  );
};



export default logoutuser;