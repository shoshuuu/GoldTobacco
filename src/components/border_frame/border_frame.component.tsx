import { ReactNode } from "react";
import "./border_frame.styles.scss";

interface Props {
  child: ReactNode;
}
function BorderFrame(props: Props) {
  return (
    <div className="border">
      <div className="border__outer">
        <div className="border__mid">
          <img
            className="corner top left"
            src={require("../../miscellaneous/images/border 1.png")}
          ></img>
          <img
            className="corner top right"
            src={require("../../miscellaneous/images/border 1.png")}
          ></img>
          <img
            className="corner bottom right"
            src={require("../../miscellaneous/images/border 1.png")}
          ></img>
          <img
            className="corner bottom left"
            src={require("../../miscellaneous/images/border 1.png")}
          ></img>

          {props.child}
        </div>
      </div>
    </div>
  );
}
export default BorderFrame;
