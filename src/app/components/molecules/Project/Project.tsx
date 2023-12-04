import React from "react";
import "./Project.css";
import Button from "../../atoms/Button/Button";
import linkIcon from "../../../../../public/linkIcon.png";
import Icon from "../../atoms/Icon/Icon";
import Image, { StaticImageData } from "next/image";

type Props = {
  projectImage: string | StaticImageData;
  projectImageAlt: string;
  header?: string;
  subHeader?: string;
  desc?: string;
  skills?: string[];
  href: string;
};

const Project = (props: Props) => {
  return (
    <div className="ProjectContainer">
      <Image src={props.projectImage} alt={props.projectImageAlt} width={128} height={128}/>
      <div className="Project__contentContainer">
        <div>
          <div className="Project__header">
            <a>{props.header}</a>
            <Icon
              src={linkIcon}
              alt="link icon"
              href={props.href}
              size="small"
            />
          </div>
          <div className="Project__subHeader">{props.subHeader}</div>
        </div>
        <div className="Project__desc">{props.desc}</div>
        <div className="Project__buttonContainer">
          {props.skills?.map((skill, index) => {
            return <Button key={index}>{skill}</Button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
