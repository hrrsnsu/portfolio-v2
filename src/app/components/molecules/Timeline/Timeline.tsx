import React from "react";
import "./Timeline.css";
import Button from "../../atoms/Button/Button";
type Props = {
  timeline?: string;
  header?: string;
  subHeader?: string;
  desc?: string;
  skills?: string[];
};

const Timeline = (props: Props) => {
  return (
    <div className="TimelineContainer">
      <div className="Timeline">{props.timeline}</div>
      <div className="Timeline__contentContainer">
        <div>
          <div className="Timeline__header">{props.header}</div>
          <div className="Timeline__subHeader">{props.subHeader}</div>
        </div>
        <div className="Timeline__desc">{props.desc}</div>
        <div className="Timeline__buttonContainer">
          {props.skills?.map((skill) => {
            return <Button>{skill}</Button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
