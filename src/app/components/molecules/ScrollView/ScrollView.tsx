import React from "react";
import Description from "../../atoms/Description/Description";
import "./ScrollView.css";
import ContentBox from "../ContentBox/ContentBox";
import Timeline from "../Timeline/Timeline";
import Project from "../Project/Project";
type Props = {};

const ScrollView = (props: Props) => {
  return (
    <div className="ScrollView">
      <p className="ScrollView__desc">
        Discovering gaming at age 10 sparked a curiosity for the code behind the magic, propelling me from player to creator.
        <br />
        <br />
        Instead of delving deeper into game development, I found an interst in creating interactive and beautiful web experiences.
        This lead me to machine learning and artificial intelligence. From this, I gained experience building on fast-paced start ups.
        <br />
        <br />
        Nowadays, I work as a web engineer at Credit One Bank. I bring an artistic touch to coding, ensuring that the user experience is not only efficient but also visually engaging.
      </p>
      <ContentBox>
        <Timeline
          header="Credit One Bank"
          href="https://www.creditonebank.com/"
          subHeader="Web Engineer I"
          desc="Developed and implemented components to client facing corporate and acquisitions webpages. 
          Utilized unit and integration testing to ensure dependable code.
          Followed an Agile methodology with large collaboration between UI/UX and content management teams."
          timeline="2022 - Present"
          skills={["React", "TypeScript", "Java", "AEM"]}
        />
      </ContentBox>
      <div className="Timeline__top"></div>
      <ContentBox>
        <Timeline
          header="Neosensory"
          href="https://neosensory.com/"
          subHeader="Machine Learning Intern"
          desc="Developed and tested scalable batch processing pipelines for enriching speech database (5,000+ hrs) with gender, signal-to-noise ratio, and fundamental frequency metadata.
          Formulated ideas and experimental strategies to optimize product such as a voice modulation application using various frequency translation algorithms"
          timeline="June 2021 - Sept 2021"
          skills={["Python", "Jupyter", "Keras"]}
        />
      </ContentBox>
      <ContentBox>
        <Timeline
          header="Mission Cloud (Prev. Stratalux)"
          href="https://www.missioncloud.com/"
          subHeader="Software Engineer Intern"
          desc="Developed image recognition application that splices video and analyzes scenes using AWS Rekognition API. 
          Utilized AWS Lambda triggers for task orchestration to enable drag and drop use by end user.
          Created presentation to corporate leaders to promote potential application use cases."
          timeline="June 2020 - Sept 2020"
          skills={["AWS", "Python", "Rekognition"]}
        />
      </ContentBox>
      <ContentBox>
        <Project></Project>
      </ContentBox>
    </div>
  );
};

export default ScrollView;
