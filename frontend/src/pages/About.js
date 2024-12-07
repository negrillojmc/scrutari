import React from "react";
import AboutCoverPhoto from "./about/AboutCoverPhoto";
import AboutScrutari from "./about/AboutScrutari";
import VisionMission from "./about/VisionMission";
import TeamMembers from "./about/TeamMembers";

const About = () => {
  return (
    <div>
      <AboutCoverPhoto />
      <AboutScrutari />
      <VisionMission />
      <TeamMembers />
    </div>
  );
};

export default About;
