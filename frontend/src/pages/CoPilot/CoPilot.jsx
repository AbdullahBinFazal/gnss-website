// src/pages/CoPilot/CoPilot.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";

const CoPilot = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      
      <div id="copilot-assistance">
        <Comp3 />
      </div>
      
      <Comp4 />
      
      <Comp5 />
      
      <div id="software-configuration">
        <Comp6 />
      </div>
      
      <Comp7 />
      
      <div id="data-hub-navigation">
        <Comp8 />
      </div>
    </div>
  );
};

export default CoPilot;