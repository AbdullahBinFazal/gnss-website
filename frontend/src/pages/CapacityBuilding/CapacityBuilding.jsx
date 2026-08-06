// src/pages/CapacityBuilding/CapacityBuilding.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";

const CapacityBuilding = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      
      <div id="training-workshops">
        <Comp3 />
      </div>

      <Comp4 /> 
      
      <div id="tutorials">
        <Comp5 />
      </div>
    </div>
  );
};

export default CapacityBuilding;