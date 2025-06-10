import React from "react";
import './Pages.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Courses = () => {
    return(
        <div id="home2">
            <Header/>
                <div id="home3">
                    <h1 id="about">Our Academic Programs</h1>
                    <p>Vivekanand College offers a comprehensive range of undergraduate and 
                    postgraduate programs designed to equip students with the knowledge and
                    skills demanded by today's dynamic global landscape. Our curriculum is 
                    regularly updated to reflect industry trends and academic advancements.</p>
                    <h2>Discover Campus Life</h2>
                    <hr></hr>
                    <div>
                        <video controls width="100%" height="auto">
                            <source src ="./public/Video/vck.mp4" type="video/mp4"/>
                        </video>
                    </div>
            
                    <h2><b>Undergraduate Progran(UG)</b></h2>
                    <hr></hr>
                    <ul>
                        <li>**Bachelor of Science (B.Sc.)**</li>
                        <ul>
                            <li>Computer Science (3 years)</li>
                            <li>Information Technology (3 years)</li>
                            <li>Biotechnology (3 years)</li>
                        </ul>
                        <li>**Bachelor of Commerce (B.Com)**</li>
                        <ul>
                            <li>Accounting & Finance (3 years)</li>
                            <li>Banking & Insurance (3 years)</li>
                        </ul>
                     <li>**Bachelor of Arts (B.A.)**</li>
                        <ul>
                            <li>English Literature (3 years)</li>
                            <li>Psychology (3 years)</li>
                        </ul>
                    </ul>
                    <h2><b>Postgraduate Program(PG)</b></h2>
                    <hr></hr>
                    <ul>
                        <li>**Master of Science (M.Sc.)**</li>
                        <ul>
                            <li>Computer Science (2 years)</li>
                            <li>Information Technology (2 years)</li>
                        </ul>
                        <li>**Master of Commerce (M.Com)** (2 years)</li>
                        <li>**Master of Arts (M.A.)** (2 years)</li>
                    </ul>
                    <h2>Program Details & Fee Structure(Annual)</h2>
                    <hr></hr>
                    <table id="courses">
                        <thead>
                            <th>Program type</th>
                            <th>Course Name</th>
                            <th>Duration</th>
                            <th>Annual Fee(INR)</th>
                            <th>Eligibility</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UG</td>
                                <td>B.Sc.Computer Science</td>
                                <td>3Years</td>
                                <td>₹ 85,000</td>
                                <td>10+2 with PCM(50%)</td>
                            </tr>
                            <tr>
                                <td>UG</td>
                                <td>B.Com. Accounting & Finance	</td>
                                <td>3 Years	</td>
                                <td>₹ 70,000</td>
                                <td>10+2 Commerce (45%)</td>
                            </tr>
                            <tr>
                                <td>PG</td>
                                <td>M.Sc. Information Technology</td>
                                <td>2 Years</td>
                                <td>₹ 95,000</td>
                                <td>B.Sc. IT/CS (50%)</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2><b>Specialized & Vocational M.Sc. Information Technology Courses</b></h2>
                    <hr></hr>
                    <p>In addition to traditional degree programs, we offer various certificate and 
                    diploma courses in areas like Digital Marketing, Web Development, Data 
                    Analytics, and Soft Skills Development, providing specialized training for career
                    enhancement.</p>
                    <p id="home1">Have questions about a specific course?</p>
                    <a href="Contactpage" id="home">Inquire About Courses</a>
                </div>
            <Footer/>

        </div>
    )
}
export default Courses