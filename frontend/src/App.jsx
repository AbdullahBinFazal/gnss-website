import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/authSlice";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Research from "./pages/Research/Research";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import Faculty from "./pages/Faculty/Faculty";  
import Publications from "./pages/Publications/Publications";
import Programs from "./pages/Programs/Programs";
import Events from "./pages/Events/Events";
import Engagement from "./pages/Engagement/Engagement";
import FAQ from "./pages/FAQ/FAQ";  // ← NEW
import Resources from "./pages/Resources/Resources";
import CoPilot from "./pages/CoPilot/CoPilot";
import Infrastructure from "./pages/Infrastructure/Infrastructure";
import GNSSAcademy from "./pages/GNSSAcademy/GNSSAcademy";
import Team from "./pages/Team/Team";
import Collaborations from "./pages/Collaborations/Collaborations";
import Opportunities from "./pages/Opportunities/Opportunities";
import CapacityBuilding from "./pages/CapacityBuilding/CapacityBuilding";
import DigitalObservatory from "./pages/DigitalObservatory/DigitalObservatory";
import Facilities from "./pages/Facilities/Facilities";
import ContactUs from "./pages/ContactUs/ContactUs";



// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute, { AdminRoute } from "./components/ProtectedRoute";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/publications" element={<Publications />} />
<Route path="/resources" element={<Resources />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/copilot" element={<CoPilot />} />
    <Route path="/engagement" element={<Engagement />} />
         <Route path="/infrastructure" element={<Infrastructure />} />
  <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<FAQ />} />  {/* ← NEW */}
  <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
<Route path="/gnss-academy" element={<GNSSAcademy />} />
<Route path="/team" element={<Team />} />
<Route path="/opportunities" element={<Opportunities />} />
<Route path="/capacity-building" element={<CapacityBuilding />} />
<Route path="/digital-observatory" element={<DigitalObservatory />} />
<Route path="/facilities" element={<Facilities />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;