import React from "react";
import Image, { StaticImageData } from "next/image";
import "./Icon.css";
import Link from "next/link";

type Props = {
  src: string | StaticImageData;
  alt: string;
  href: string;
};

const Icon = (props: Props) => {
  return (<Link href={props.href}>
    <Image
      className="Icon"
      src={props.src}
      alt={props.alt}
      width={25}
      height={25}
    />
  </Link>);
};

export default Icon;
