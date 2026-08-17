// src/pages/DigitalObservatory/DigitalObservatory.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";

const DigitalObservatory = () => {
  return (
    <div>
      <Comp1 />
      
    

      {/* GNSS Observatory Cards - Comp3 (IN DROPDOWN) */}
      <div id="gnss-observatory-cards-section" style={{ scrollMarginTop: "130px" }}>
        <Comp2 />
      </div>


      <Comp3 />
      
      {/* Space Weather - Comp4 (IN DROPDOWN) */}
      <div id="space-weather-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />

 <Comp5 />

      </div>
    </div>
  );
};

export default DigitalObservatory;