import React from "react";
import "./Description.css";

type Props = {
  children?: React.ReactNode;
  marginTop?: string;
};

const Description = (props: Props) => {
  return (
    <p className="Description" style={{ marginTop: props.marginTop }}>
      {props.children}
    </p>
  );
};

export default Description;
