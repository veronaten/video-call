import "./Screen.css";

const Screen = (props) => {
  return (
    <div className="screen">
      <video>{props.id}</video>
    </div>
  )
};

export default Screen;