import "./border_frame.styles.scss";

function BorderFrame(props) {
  return (
    <div className="border">
      <div className="border__outer">
        <div className="border__mid">
          <img
            className="corner top left"
            alt="" src={require("../../miscellaneous/images/border 1.png")}
          ></img>
          <img
            className="corner top right"
            alt="" src={require("../../miscellaneous/images/border 1.png")}
          ></img>
          <img
            className="corner bottom right"
            alt="" src={require("../../miscellaneous/images/border 1.png")}
          ></img>
          <img
            className="corner bottom left"
            alt="" src={require("../../miscellaneous/images/border 1.png")}
          ></img>

          {props.child}
        </div>
      </div>
    </div>
  );
}
export default BorderFrame;
