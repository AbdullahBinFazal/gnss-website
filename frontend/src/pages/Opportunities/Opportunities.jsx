// src/pages/Opportunities/Opportunities.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";

const Opportunities = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />

      <div id="research-opportunities">
        <Comp3 />
      </div>
      
      <div id="engagement">
        <Comp4 />
      </div>
    </div>
  );
};

export default Opportunities;