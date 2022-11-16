import React, {useEffect} from "react";
import { useCookies } from 'react-cookie';
import { Redirect } from "react-router-dom";

const logoutuser = (props) => {
  const [cookies, removeCookie] = useCookies(['user']);

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