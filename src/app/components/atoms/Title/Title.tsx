import React from "react";
import "./Title.css";
type Props = {
  children?: React.ReactNode;
  type: "title" | "subtitle";
  marginTop?: string;
};

const Title = (props: Props) => {
  return (
    <div>
      {props.type === "title" ? (
        <h1 className="Title" style={{ marginTop: props.marginTop }}>
          {props.children}
        </h1>
      ) : (
        <h2 className="Subtitle" style={{ marginTop: props.marginTop }}>
          {props.children}
        </h2>
      )}
    </div>
  );
};

export default Title;
