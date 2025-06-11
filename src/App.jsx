import React from "react";


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Courses from "./pages/CoursesPage";
import Contact from "./pages/ContactPage";
import Addmission from "./pages/AddmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";


const App = () => {
  return (
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
  )
}


export default App;