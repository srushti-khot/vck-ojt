import React from "react";


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Courses from "./pages/CoursesPage";
import Contact from "./pages/ContactPage";
import Addmission from "./pages/AddmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Srushti Sachin Khot"
          studentPhotoUrl="./Images/srushtikhot.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

      <div>
      
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutpage" element={<About/>}/>     
            <Route path="/coursespage" element={<Courses/>}/>
            <Route path="/contactpage" element={<Contact/>}/>
            <Route path="/addmissionpage" element={<Addmission/>}/>
          </Routes>
          <ChatbotComponent/>
        </Router>
    

      
      </div>
    </>
    
  )
}


export default App;