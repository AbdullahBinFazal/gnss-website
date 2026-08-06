// src/pages/DigitalObservatory/DigitalObservatory.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";

const DigitalObservatory = () => {
  return (
    <div>
      <Comp1 />
      
      <div id="gnss-observatory">
        <Comp2 />
      </div>

       <div id="gnss-observatory-cards">
        <Comp3 />
      </div>
      
      <div id="space-weather">
        <Comp4 />
      </div>
    </div>
  );
};

export default DigitalObservatory;