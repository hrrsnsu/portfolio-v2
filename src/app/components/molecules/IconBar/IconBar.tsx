import React from "react";
import Icon from "../../atoms/Icon/Icon";

type Props = {};

const IconBar = (props: Props) => {
  return (
    <div className="IconBar">
      <Icon src={""} alt="github icon" href="" />
      <Icon src={""} alt="linkedin icon" href="" />
    </div>
  );
};

export default IconBar;
