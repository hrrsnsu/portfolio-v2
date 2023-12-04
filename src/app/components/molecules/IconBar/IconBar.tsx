import React from "react";
import Icon from "../../atoms/Icon/Icon";
import githubLogo from "../../../../../public/githubLogo.png";
import linkedinLogo from "../../../../../public/linkedinLogo.png";
import youtubeLogo from "../../../../../public/youtubeLogo.png"
import "./IconBar.css";

type Props = {};

const IconBar = (props: Props) => {
  return (
    <div className="IconBar">
      <Icon src={githubLogo} alt="github icon" href="https://github.com/hrrsnsu/" />
      <Icon src={linkedinLogo} alt="linkedin icon" href="https://linkedin.com/in/harrison-su/" />
      <Icon src={youtubeLogo} alt="youtube icon" href="https://www.youtube.com/channel/UCzC8vViBCXSb0w9RdQ_qNnQ" />
    </div>
  );
};

export default IconBar;
