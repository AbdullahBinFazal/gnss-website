// src/pages/Programs/Programs.jsx
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";

const Programs = () => {
  return (
    <div>
      <Comp1 />
      
      {/* Academics - Comp2 (NOT in dropdown) */}
      <div id="academics" style={{ scrollMarginTop: "130px" }}>
        <Comp2 />
      </div>
      
      {/* MS Program - Comp3 (IN DROPDOWN) */}
      <div id="ms-program-section" style={{ scrollMarginTop: "130px" }}>
        <Comp3 />
      </div>
      
      {/* PhD Program - Comp4 (IN DROPDOWN) */}
      <div id="phd-program-section" style={{ scrollMarginTop: "130px" }}>
        <Comp4 />
      </div>
      
      {/* Comp5 (NOT in dropdown) */}
      <Comp5 />
      
      {/* BS Program - Comp6 (IN DROPDOWN) */}
      <div id="bs-program-section" style={{ scrollMarginTop: "130px" }}>
        <Comp6 />
      </div>
    </div>
  );
};

export default Programs;