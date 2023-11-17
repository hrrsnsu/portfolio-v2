import React from "react";
import Description from "../../atoms/Description/Description";
import NavLinks from "../NavLinks/NavLinks";
import Title from "../../atoms/Title/Title";
import "./AboutUs.css";
import IconBar from "../IconBar/IconBar";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="AboutUs">
      <header className="AboutUs--content">
        <Title type="title">Harrison Su</Title>
        <Title marginTop='1rem' type="subtitle">Software Engineer</Title>
        <Description marginTop='1rem'>
          I have experience full stack devloping on fast paced start ups and corporate level
          companies.
        </Description>
        <NavLinks/>
      </header>
      <IconBar />
    </div>
  );
};

export default AboutUs;
