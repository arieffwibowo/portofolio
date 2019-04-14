import React, { Component } from 'react';
import './Content.css';


class Content extends Component{
    render(){
        return(
            <div>
                <header class="animate-bottom">
                    <div id = "homepage-section" class = "container">
                        <div>
                            <div >
                                <h1 id = "text-welcome">
                                    <b>Hello, Welcome to My Website</b> 
                                </h1><br></br>
                                <div class="p-2">
                                    <p>My name is Muhammad Arief Wibowo and i'm currently lived in Jakarta.
                                        Nice to meet you
                                    </p>
                                </div><br></br><br></br>
                                <div>
                                    <a class="btn btn-primary shadow p-2 mb-4" href="#About">Let's explore me !</a>
                                </div><br></br>
                                <div>
                                    <span><a href="https://www.instagram.com/arieffwibowo/" class=" sosmed nav-link fa fa-instagram"></a></span>
                                    <span><a href="https://www.facebook.com/muhammad.arief.wibow" class=" sosmed nav-link fa fa-facebook"></a></span>
                                    <span><a href="https://twitter.com/ArieffWibowo" class=" sosmed nav-link fa fa-twitter"></a></span>
                                    <span><a href="https://www.linkedin.com/in/m-ariefwibowo/" class="sosmed nav-link fa fa-linkedin"></a></span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <p class="scrolldown">
                        <a class="glyphicon glyphicon-chevron-down smoothscroll" href="#About"></a>
                    </p>
                </header>
                <center><img class="pembatas" src="about.png" alt=""></img></center>
                {/*===================== About ====================*/}

                <section id="About" class="animate-bottom">
                    <div class="container">
                        <div class="row">
                            <div class = "col-md-6">
                                <center><img class="responsive" src="me.png" alt=""></img></center>
                            </div>
                            
                            <div class = "col-md-6">
                                <div class = "row">
                                    <div class = "col-md-3">
                                        <h4 id = "text-about">
                                            <b>ABOUT</b> 
                                        </h4>
                                    </div>
                                </div>
                                <p>Hello, my name is Muhammad Arief Wibowo. I'm 20 years old guy who enthusiasm on Front-End Developer
                                    and UI/UX Designer. Work hard and
                                    respect on progress are my keys to
                                    be Success. Sometimes i always got failure, but i'm sure there will be a miracle
                                    if we keep going</p>
                            </div>        
                        </div><br></br><br></br>
                        <div class = "row">
                            <div class = "col-md-6">
                                
                            </div>
                            <div class = "col-md-6">
                                <div class = "row">
                                    <div class = "col-md-3">
                                        <h4 id = "text-kontak">
                                            <b>CONTACT</b> 
                                        </h4>
                                    </div>
                                    
                                </div>
                                
                                <p class="address">
                                    <span>Muhammad Arief Wibowo</span><br></br>
                                    <span>Jl. Dr. Muwardi 1 , No. 38<br></br>
                                            Grogol, Jakarta Barat
                                    </span><br></br>
                                    <span>085711447702</span><br></br>
                                <span> <a class = "shadow" id ="email" href = "mailto:arief.wibowo86@gmail.com">arief.wibowo86@gmail.com</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <center><img class="pembatas" src="education.png" alt=""></img></center>

                {/*===================== Education ====================*/}

                <section id="Education" class="animate-bottom">
                    <div class = "container">
                        <div class = "row">
                            <div class = "col-md-2">
                                <h4 id = "text-education">
                                    <b>EDUCATION</b> 
                                </h4>
                            </div>
                        </div><br></br>
                        <div class = "row">
                            <div class = "col-md-6">
                                <h3>SMPN 5 Jakarta</h3>
                                <p class="info"><em class="date">2010 - 2013</em></p>
                                <br></br>

                                <div class = "row">
                                    <div class = "col-md-12">
                                        <h3>SMAN 1 Jakarta</h3>
                                        <p class="info"><em class="date">2013 - 2016</em></p>
                                        <br></br>

                                        <div class = "row">
                                            <div class = "col-md-12">
                                                <h3>University of Indonesia</h3>
                                                <p class="info">Bachelor of Information System <span>&bull;</span> <em class="date">2016 - Present</em></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div class = "col-md-6">
                               
                            </div>
                        </div>
                    </div>
                </section>
                <center><img class="pembatas" src="experience.png" alt=""></img></center>
                {/*===================== Experience ====================*/}

                <section id = "Experience" class="animate-bottom">
                    <div class = "container">
                        <div class = "row">
                            <div class = "col-md-2">
                                <h4 id = "text-experience">
                                    <b>EXPERIENCE</b> 
                                </h4>
                            </div>
                        </div><br></br><br></br>
                        <div class = "row">
                            <div class = "col-md-5">
                                <h3>Class of Product Design</h3>
                                <p class="info">RISTEK OPEN CLASS <span>|</span> <em class="date">Nov 2016 - Nov 2016</em></p>
                                <p>
                                Learn how to design an app in mobile device
                                </p><br></br>
                            </div>
                            <div class = "col-md-2"></div>
                            <div class = "col-md-5">
                                <h3>Graphic Designer</h3>
                                <p class="info">UI GOES TO BOEDOET <span>|</span> <em class="date">Jan 2017 - Jan 2017</em></p>

                                <p>
                                Designing poster and twibbon "UI GOES TO BOEDOET"
                                </p><br></br>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-5">
                                <h3>Staff of Seminar Educare</h3>
                                <p class="info">EDUCARE <span>|</span> <em class="date">Oct 2017 - Nov 2017</em></p>

                                <p>
                                Educare is an event that aims to educate people about IT's knowledge
                                </p><br></br>
                            </div>
                            <div class = "col-md-2"></div>
                            <div class = "col-md-5">
                                <h3>Staff of Startup Academy</h3>
                                <p class="info">COMPFEST 9 <span>|</span> <em class="date">March 2017- Aug 2017</em></p>

                                <p>
                                COMPFEST is the biggest IT's event in Indonesia which held by
                                college student. Startup academy is part of COMPFEST which
                                helping people who have a briliant idea to solve a problem in
                                the form of Startup.
                                </p><br></br>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-md-5">
                                <h3>Class of Web Developer</h3>
                                <p class="info">RISTEK OPEN CLASS <span>|</span> <em class="date">Nov 2017 - Nov 2017</em></p>

                                <p>
                                Learn front-end developer (HTML and CSS)
                                </p><br></br>
                            </div>
                            <div class = "col-md-2"></div>
                            <div class = "col-md-5">
                                <h3>Person in Charge of Startup Academy</h3>
                                <p class="info">COMPFEST X <span>|</span> <em class="date">Jan 2018 - Aug 2018</em></p>

                                <p>
                                COMPFEST is the biggest IT's event in Indonesia which held by
                                college student. Startup academy is part of COMPFEST which
                                helping people who have a briliant idea to solve a problem in
                                the form of Startup.
                                </p>
                            </div>
                        </div><br></br>
                        <div class = "row">
                            <div class = "col-md-5">
                                <h3>Internal Control</h3>
                                <p class="info">FUKI <span>|</span> <em class="date">Jan 2019 - present</em></p>

                                <p>
                                Internal Control of Forum Ukhuwah and Kajian Islam
                                </p><br></br>
                            </div>
                            <div class = "col-md-2"></div>
                            <div class = "col-md-5">
                                <h3>Member of Entrepreneur SIG</h3>
                                <p class="info">SISTEM 2019 <span>|</span> <em class="date">Jan 2019 - present</em></p>

                                <p>
                               Member of SISTEM Fasilkom UI 2019
                                </p>
                            </div>
                        </div>
                    </div><br></br><br></br><br></br>
                    <center>
                        <a href="cv.pdf" class="button button-download shadow"><i class="fa fa-download"></i>&nbsp;Download CV</a>
                    </center> 
                </section>
                <center><img class="pembatas" src="skills.png" alt=""></img></center>
                {/*===================== Skills ====================*/}
                <section id = "Skills" class="animate-bottom">
                    <div class = "container">
                        <div class = "row">
                            <div class = "col-md-2">
                                <h4 id = "text-skills">
                                    <b>SKILLS</b> 
                                </h4>
                            </div>
                        </div><br></br>
                        <div class = "row">
                            <div class = "col-md-4">
                                <p>HTML</p>
                                <div class=" shadow progress">
                                    <div id = "progress-html" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class = "col-md-4">
                                <p>CSS</p>
                                <div class="shadow progress">
                                    <div id = "progress-css" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class = "col-md-4">
                                <p>Javascript</p>
                                <div class=" shadow progress">
                                    <div id = "progress-js" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div><br></br>
                        <div class = "row">
                            <div class = "col-md-4">
                                <p>Bootstrap</p>
                                <div class=" shadow progress">
                                    <div id = "progress-bs" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class = "col-md-4">
                                <p>React-Js</p>
                                <div class=" shadow progress">
                                    <div id = "progress-react" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class = "col-md-4">
                                <p>MYSQL</p>
                                <div class=" shadow progress">
                                    <div id = "progress-mysql" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div><br></br>
                        <div class = "row">
                            <div class = "col-md-4">
                                <p>Adobe XD</p>
                                <div class=" shadow progress">
                                    <div id = "progress-xd" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class = "col-md-4">
                                <p>Adobe Photoshop</p>
                                <div class=" shadow progress">
                                    <div id = "progress-ps" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class = "col-md-4">
                                <p>Wireframing</p>
                                <div class="shadow progress">
                                    <div id = "progress-wf" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div><br></br>
                        <div class = "row">
                            <div class = "col-md-4">
                                <p>Communication</p>
                                <div class=" shadow progress">
                                    <div id = "progress-com" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class = "col-md-4">
                                <p>Teamwork</p>
                                <div class=" shadow progress">
                                    <div id = "progress-tw" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class = "col-md-4">
                                <p>Analysis</p>
                                <div class="shadow progress">
                                    <div id = "progress-al" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class = "footer mt-auto py-3">
                    <div id = "sosmed">
                        <span><a href="https://www.instagram.com/arieffwibowo/" class=" sosmed-footer nav-link fa fa-instagram"></a></span>
                        <span><a href="https://www.facebook.com/muhammad.arief.wibow" class="sosmed-footer nav-link fa fa-facebook"></a></span>
                        <span><a href="https://twitter.com/ArieffWibowo" class="sosmed-footer nav-link fa fa-twitter"></a></span>
                        <span><a href="https://www.linkedin.com/in/m-ariefwibowo/" class="sosmed-footer nav-link fa fa-linkedin"></a></span>
                    </div>
                    <div  id = "copyright">
                        <h5>Copyright &copy; 2019 by Muhammad Arief Wibowo</h5>    
                    </div>
                </footer>
            </div>
            
        );
    }
}

export default Content;