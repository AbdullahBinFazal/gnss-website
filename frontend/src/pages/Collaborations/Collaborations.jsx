// src/pages/Collaborations/Collaborations.jsx
import Comp1 from "./components/Comp1";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";

const Collaborations = () => {
  return (
    <div>
      <Comp1 />
  
        <Comp3 />
     
      
      {/* Institutions - Comp4 (IN DROPDOWN) */}
      <div id="institutions-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>
       <Comp5 />
      
  

         <Comp6 />
         <Comp7 />
          {/* Engagement - Comp8 (IN DROPDOWN) */}
      <div id="engagement-section" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>
    </div>
  );
};

export default Collaborations;