// src/pages/Research/Research.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";

const Research = () => {
  return (
    <div>
      <Comp1 />
      
      <div id="domains">
        <Comp2 />
      </div>
      
      <div id="research-detail">
        <Comp3 />
      </div>
      
      <div id="ionospheric">
        <Comp4 />
      </div>
      
      <div id="crustal-deformation">
        <Comp5 />
      </div>
      
      <div id="impact">
        <Comp6 />
      </div>
      
      <div id="research-projects">
        <Comp7 />
      </div>
      
      <div id="publications">
        <Comp8 />
      </div>
    </div>
  );
};

export default Research;