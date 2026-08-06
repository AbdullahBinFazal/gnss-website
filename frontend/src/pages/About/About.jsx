// src/pages/About/About.jsx
import { Layout } from 'antd';
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";

const { Content } = Layout;

const About = () => {
  return (
    <Content>
      <Comp1 />
      <Comp2 />
      
      <div id="our-mission" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>
      
      <div id="core-objectives" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>

      <div id="strategic-objectives">
        <Comp5 />
      </div>
      
      <div id="team" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>
      
      <div id="lab-leadership" style={{ scrollMarginTop: "130px" }}>
        <Comp7 />
      </div>
      
      <div id="research-teams-carousel" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>
      
     
    </Content>
  );
};

export default About;