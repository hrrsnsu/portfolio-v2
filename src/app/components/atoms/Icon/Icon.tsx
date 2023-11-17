import React from "react";
import Image, { StaticImageData } from "next/image";
import "./Icon.css";

type Props = {
  src: string | StaticImageData;
  alt: string;
  href?: string;
};

const Icon = (props: Props) => {
  return <Image className="Icon" src={props.src} alt={props.alt} />;
};

export default Icon;
