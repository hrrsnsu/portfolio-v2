import React from "react";
import "./ContentBox.css";

type Props = {
  children: React.ReactNode;
};

const ContentBox = (props: Props) => {
  return <div className="ContentBox">{props.children}</div>;
};

export default ContentBox;
