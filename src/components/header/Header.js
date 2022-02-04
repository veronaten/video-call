import React, { useState } from "react";
import "./Header.css";
import Button from "../button/Button";

const Header = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  
  const buttonHandler = () => {
    setBtnDisabled(true);
  }

  return (
    <div className="header__wrapper">
      <h1 className="header__title" >Verona Video Calls</h1>
      {!btnDisabled && <Button className="header__button" variant = "primary" onClick={buttonHandler}>Turn On</Button>}
      {btnDisabled && <Button className="header__button" variant = "secondary" onClick={buttonHandler}>Turn On</Button>}
    </div>
  )
}

export default Header;