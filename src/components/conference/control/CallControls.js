import Button from "../../button/Button";
import Stopwatch from "../../stopwatch/Stopwatch";

const CallControls = (props) => {
  return (
    <div className="buttons__wrapper">
      <Button name="Start Call"/>
      <Button name="End Call"/>
      <Stopwatch />
    </div>
  )
};

export default CallControls;