// src/pages/Collaborations/Collaborations.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";

const Collaborations = () => {
  return (
    <div>
      <Comp1 />
      
      <div id="academic-partners">
        <Comp2 />
      </div>

      <div id="agreements">
        <Comp3 />
      </div>
      
      <div id="outreach">
        <Comp4 />
      </div>
      
      <Comp5 />
    </div>
  );
};

export default Collaborations;