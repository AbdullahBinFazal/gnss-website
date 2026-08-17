// src/pages/About/About.jsx
import { Layout } from 'antd';
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp31 from "./components/Comp31";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Comp9 from "./components/Comp9";

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
      
      {/* Activities Section */}
      <div id="activities-section" style={{ scrollMarginTop: "130px" }}>
        <Comp31 />
      </div>
      
      {/* Vision Section - Navbar dropdown: Vision */}
      <div id="vision-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>

      {/* Mission Section - Navbar dropdown: Mission */}
      <div id="research-teams-carousel" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>

      {/* Objectives Section - Navbar dropdown: Objectives */}
      <div id="lab-leadership" style={{ scrollMarginTop: "130px" }}>
        <Comp7 />
      </div>

      {/* Strategic Objectives Section */}
      <div id="objectives-section" style={{ scrollMarginTop: "130px" }}>
        <Comp5 />
      </div>

      {/* Team Section */}
      <div id="team-section" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>

      {/* Our People Section - Navbar dropdown: Our People */}
      <div id="people-section" style={{ scrollMarginTop: "130px" }}>
        <Comp9 />
      </div>
    </Content>
  );
};

export default About;