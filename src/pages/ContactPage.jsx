import React from "react";
import './Pages.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Contact = () => {
    return(
        <div id="home2">
            <Header/>
                <div id="contact">
                    <h1 id="about">Contact Us</h1>
                    <p>We'd love to hear from you! Whether you have questions about admissions, 
                    programs, or campus life, our team is here to help.</p>
                    <h2><b>General Enquiries</b></h2>
                    <hr></hr>
                    <p><b>Vivekanand College Main Campus</b></p>
                    <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur,
                     Mumbai, Maharashtra 400071]</p>
                    <p>India</p>
                    <p>Phone: **+91 12345 67890**</p>
                    <p> Email: **info@vivekanandcollege.edu**</p>
                    <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
                    <h2><b>Admissions Office</b></h2>
                    <hr></hr>
                    <p>For all admission-related queries regarding undergraduate or postgraduate 
                    programs:</p>
                    <p>Phone: +91 98765 43210</p><br></br>
                    <p>Email: studentsupport@vivekanandcollege.edu</p>
                    <h2>Student Support Services</h2>
                    <hr></hr>
                    <p>For current student support, academic advising, or general assistance:</p>
                    <p>Phone: +91 87654 32109</p>
                    <p>Email: studentsupport@vivekanandcollege.edu</p>
                    <h2><b>Find Us on the Map</b></h2>
                    <hr></hr>
                    <p>[You can embed a Google Map here later using an iframe or a React map 
                    library.]</p>
                    <a href="https://maps.google.com/?q=Vivekanand+College"><u>View on Google Maps</u></a>
                    <h2><b>Send Us a Message</b></h2>
                    <hr></hr>
                    <p>[A contact form with fields for Name, Email, Subject, Message can be added
                     here.]
                    </p>
                </div>
            <Footer/>

        </div>
    )
    
}
export default Contact