import React from "react";
import Description from "../../atoms/Description/Description";
import "./ScrollView.css";
import ContentBox from "../ContentBox/ContentBox";
import Timeline from "../Timeline/Timeline";
type Props = {};

const ScrollView = (props: Props) => {
  return (
    <div className="ScrollView">
      <p className="ScrollView__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        <br />
        <br />
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        <br />
        <br />
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ContentBox>
        <Timeline
          header="Credit One Bank"
          subHeader="Web Engineer I"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat."
          timeline="2022 - Present"
          skills={["React", "Baba", "TypeScript"]}
        />
      </ContentBox>
      <div className="Timeline__top"></div>
      <ContentBox>
        <Timeline
          header="Neosensory"
          subHeader="Machine Learning Intern"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat."
          timeline="June 2021 - Sept 2021"
          skills={["Python", "Keras", "Jupiter"]}
        />
      </ContentBox>
      <ContentBox>
        <Timeline
          header="Stratalux"
          subHeader="Software Engineer Intern"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat."
          timeline="June 2020 - Sept 2020"
          skills={["AWS", "Python", "Rekognition"]}
        />
      </ContentBox>
    </div>
  );
};

export default ScrollView;
