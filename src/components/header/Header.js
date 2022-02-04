import "./Header.css"
import Button from "../button/Button"

function Header({ children }) {
  return (
    <div className="header__wrapper">
      <h1 className="header__title">Verona Video Calls</h1>
      <Button className="header__button" onClick={children.handleAppStart}>
        Turn On
      </Button>
    </div>
  )
}

export default Header
