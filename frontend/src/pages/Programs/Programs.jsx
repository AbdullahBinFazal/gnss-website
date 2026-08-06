// src/pages/Programs/Programs.jsx
import { useState } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Comp9 from "./components/Comp9";
import Comp10 from "./components/Comp10";


const Programs = () => {
  const [activeTab, setActiveTab] = useState("ms");

  return (
    <div>
      <Comp1 />
      
      <div id="academics">
        <Comp2 />
      </div>
      
      
      
      <div id="undergraduate">
        <Comp7 />
      </div>
      
      <Comp8 />
      
      <div id="academic-resources">
        <Comp9 />
      </div>
      
      <Comp10 />
      
      
      
      
  
      
      
    </div>
  );
};

export default Programs;