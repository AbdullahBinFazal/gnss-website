// src/pages/Home/Home.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../store/authSlice";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp61 from "./components/Comp61";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Comp9 from "./components/Comp9";
import Comp10 from "./components/Comp10";
import Comp11 from "./components/Comp11";
import Comp12 from "./components/Comp12";
import LocationMap from "./components/LocationMap";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Comp1 />
      <Comp2 />

       <Comp6 />

        <Comp61 />
      
      <div id="facilities-section">
        <Comp5 />
      </div>
      
    
      <Comp7 />
      <Comp8 />
      
      <div id="collaborations-section">
        <Comp9 />
      </div>
      
 <Comp11 /> 

       <Comp10 />
          <Comp12 />
     
      <LocationMap />
    </div>
  );
};

export default Home;