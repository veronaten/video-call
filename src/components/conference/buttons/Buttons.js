import ButtonEnd from "./ButtonEnd";
import ButtonStart from "./ButtonStart";
import Duration from "./Duration";

const Buttons = () => {
  return (
    <div className="buttons__wrapper">
      <ButtonStart />
      <ButtonEnd />
      <Duration />
    </div>
  )
};

export default Buttons;