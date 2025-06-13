import React from "react";
import './Pages.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Home = () => {
    return(
        <div id="home2">
            
            <Header/>
                
                    <div id="home3">
                        <div id="hero-section">
                            <img src="./Images/header.png" alt="vivekanand college" height={350} width={950} id="hero-banner-image"/>
                            <div id="hero-overlay-text">
                                <h1>Welcome to vivekanand college!</h1>
                                <h3>Your journey to excellence start here.</h3>
                                <a href="addmissionpage" id="apply"><h3>Apply Now!</h3></a>

                            </div>
                        </div>
                            <p>**Vivekanand College** is a premier educational institution dedicated to
                            fostering academic excellence, innovation, and holistic development.
                            Established in [Year of Establishment, e.g., 1980], we have proudly served 
                            generations of students, empowering them to achieve their full potential.
                            </p>
                            <p>At Vivekanand College, we believe in a vibrant learning environment that
                            extends beyond textbooks. Our state-of-the-art facilities, experienced faculty,
                            and diverse student community create a unique ecosystem where curiosity 
                            thrives and future leaders are shaped.
                            </p>
                            <hr></hr>
                            <h2>Why Choose Vivekanand College?</h2>
                            <ul>
                                <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                                <li>**Experienced Faculty:** Learn from renowned experts and passionate
                                educators.</li>
                                <li>**Modern Facilities:** Well-equipped labs, expansive library, and
                                comfortable campus.</li>
                                <li>**Holistic Development:** Focus on co-curricular activities, sports, and 
                                community service.</li>
                                <li>**Strong Placements:** Excellent career opportunities with leading 
                                companies.</li>
                            </ul>
                            <h3>Campus Life & Facilities</h3>
                            <hr></hr>
                            <div id="image2">
                                <img src="./Images/vck.jpeg" class="page1"></img>
                                <img src="./Images/vck1.jpeg" class="page2"></img>
                            </div>

                            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>

                            <p id="home1">Ready to explore our courses?</p>
                            <a href="/Coursespage" id="home">Explore Courses</a>
                            
                    </div>
                
            
            <Footer/>

        </div>
    )
}
export default Home