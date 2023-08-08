import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Trainee Front-End Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Function Up ,Bengaluru, Karnataka Feb 2023 - July - 2023
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading .Trained in Frontend Development using
                HTML, CSS, JavaScript and React Skilled in teamwork, owning
                tasks and timely deliveries. Work on real life projects given by
                the mentors.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb-2023- July-2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Teaching Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Function Up ,Bengaluru, Karnataka April 2023 - July 2023
              </h4>
              <p>
                Worked as a Teaching Assistant to guide junior batch students
                solving their doubts and helped them in their projects.
                Help to them on real life projects.
              </p>
            </VerticalTimelineElement>
           
          </VerticalTimeline> 
        </div>
      </div>
    </>
  );
};

export default WorkExp;
