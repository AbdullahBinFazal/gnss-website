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
      
    
      
      {/* Research Detail - Comp2 (NOT in dropdown) */}
      <div id="research-detail" style={{ scrollMarginTop: "130px" }}>
        <Comp2 />
      </div>


 {/* Domains - Comp3 (IN DROPDOWN) */}
      <div id="domains-section" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>

   {/* Projects - Comp7 (IN DROPDOWN) */}
      <div id="projects-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>
      
    {/* Publications - Comp8 (IN DROPDOWN) */}
      <div id="publications-section" style={{ scrollMarginTop: "130px" }}>
        <Comp5 />
      </div>


         {/* Impact - Comp6 (NOT in dropdown) */}
      <div id="impact" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>


      {/* Ionospheric - Comp4 (NOT in dropdown) */}
      <div id="ionospheric" style={{ scrollMarginTop: "130px" }}>
        <Comp7 />
      </div>
      
        {/* Crustal Deformation - Comp5 (NOT in dropdown) */}
    
      <div id="crustal-deformation" style={{ scrollMarginTop: "130px" }}>
        <Comp8 />
      </div>
    </div>
  );
};

export default Research;