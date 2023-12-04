import React from "react";
import "./Timeline.css";
import Button from "../../atoms/Button/Button";
import linkIcon from "../../../../../public/linkIcon.png";
import Icon from "../../atoms/Icon/Icon";

type Props = {
  timeline?: string;
  header?: string;
  subHeader?: string;
  desc?: string;
  skills?: string[];
  href: string;
};

const Timeline = (props: Props) => {
  return (
    <div className="TimelineContainer">
      <div className="Timeline">{props.timeline}</div>
      <div className="Timeline__contentContainer">
        <div>
          <div className="Timeline__header">
            <a href={props.href} target="_blank">{props.header}</a>
            <Icon
              src={linkIcon}
              alt="link icon"
              href={props.href}
              size="small"
            />
          </div>
          <div className="Timeline__subHeader">{props.subHeader}</div>
        </div>
        <div className="Timeline__desc">{props.desc}</div>
        <div className="Timeline__buttonContainer">
          {props.skills?.map((skill, index) => {
            return <Button key={index}>{skill}</Button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
