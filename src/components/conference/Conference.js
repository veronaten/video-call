import Buttons from "./buttons/Buttons";
import ScreenFirst from "./ScreenFirst";
import ScreenSecond from "./ScreenSecond";

import "./Conference.css";

const Conference = () => {
  return (
    <div className="wrapper">
      <ScreenFirst />
      <Buttons />
      <ScreenSecond />
    </div>
  );
};

export default Conference;