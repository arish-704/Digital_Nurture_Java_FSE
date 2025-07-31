
import React, { useState } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  let greeting;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
    greeting = <UserGreeting />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
    greeting = <GuestGreeting />;
  }

  return (
    <div>
      {greeting}
      {button}
    </div>
  );
}

export default LoginControl;