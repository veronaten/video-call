import "./Duration.css";

const Duration = (props) => {
  return (
    <div className="duration__wrapper">
      <h3>{props.title}</h3>
      <div>{props.time}</div>
    </div>
  )
};

export default Duration;