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
      
      {/* History Section */}
      <div id="history-section" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>
      
      {/* Vision Section */}
      <div id="vision-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>

      {/* Strategic Objectives Section - Note: This is Comp5 in your code but named "Strategic Objectives" */}
      <div id="objectives-section" style={{ scrollMarginTop: "130px" }}>
        <Comp5 />
      </div>
      
      {/* Team Section */}
      <div id="team-section" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>
      
      {/* Note: Comp6 and Comp7 are not in the dropdown, but still render on the page */}
      <div id="lab-leadership" style={{ scrollMarginTop: "130px" }}>
        <Comp7 />
      </div>
      
      <div id="research-teams-carousel" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>
      
    </Content>
  );
};

export default About;