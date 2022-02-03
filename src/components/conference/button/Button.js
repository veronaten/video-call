import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className="conference__button">{props.name}</button>
    </div>
  )
};

export default Button;