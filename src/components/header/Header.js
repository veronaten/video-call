import "./Header.css";
import Button from "../button/Button";

const Header = () => {
  return (
    <div className="header__wrapper">
      <h1 className="header__title">Verona Video Calls</h1>
      <Button className="header__button">Turn On</Button>
    </div>
    
  )
}

export default Header;