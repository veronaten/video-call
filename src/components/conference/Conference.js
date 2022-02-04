import CallControls from "./control/CallControls"
import Screen from "../screen/Screen"

import "./Conference.css"

function Conference() {
  return (
    <div className="wrapper">
      <Screen id="localVideo" />
      <CallControls />
      <Screen id="remoteVideo" />
    </div>
  )
}

export default Conference
