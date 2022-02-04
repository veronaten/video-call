import CallControls from "./control/CallControls";
import Screen from "../screen/Screen";

import "./Conference.css";

const Conference = (props) => {
  return (
    <div className="wrapper">
      <Screen id="localVideo"><video id="localVideo" playsinline autoplay muted></video></Screen>
      <CallControls />
      <Screen id="remoteVideo"/>
    </div>
  );
};

export default Conference;