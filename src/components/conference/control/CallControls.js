import Button from "../../button/Button";
import Stopwatch from "../../stopwatch/Stopwatch";

const CallControls = (props) => {
  return (
    <div className="buttons__wrapper">
      <Button >{"Start Call"}</Button>
      <Button >{"End Call"}</Button>
      <Stopwatch />
    </div>
  )
};

export default CallControls;