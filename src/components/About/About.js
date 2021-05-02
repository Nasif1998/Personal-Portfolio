import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedinIn, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import pic1 from '../../proScreen/pic1.png';
import './About.css';
import { Switch } from 'react-router';

const About = () => {
    return (
        <div className="backColor">
            <div my-5>
                <NavBar></NavBar>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col lg={6} xs={12}>
                            <img src={pic1} alt="" />
                        </Col>
                        <Col lg={6} xs={12}>
                            <div style={{ marginTop: '80px' }}>
                                <p className="text-light">Hello, I'm</p>
                                <h2 className="text-light">Nasif Reza</h2>
                                <p className="text-light">Web Developer || Programmer || Enginner</p>
                                <br />
                                <p className="text-light">New front-end developer who is comfortable working with React, JavaScript, HTML/CSS to deliver exceptional customer experiences. Currently looking for an opportunity to work in a software company that needs a React developer. I'm very passionate about coding and really comfortable with JavaScript and C++. I work very hard and I'm quick learner and self motivated. I always try to learn new things and leave no stone unturned to complete my task. I always try to utilize my knowledge and expertise to my professional work.</p>
                                <br />
                                <a href="https://drive.google.com/file/d/1nhN8nk8p1K97ZpDkCbRGl942hAbSXHc3/view?usp=sharing" class="btn btn-warning">My Resume</a>
                                <br />
                                <br />
                                <br />
                                <div style={{ marginLeft: '150px', marginBottom: '50px' }}>
                                    <a href="https://github.com/Nasif1998"> <FontAwesomeIcon className="zoom" icon={faGithubSquare} size="3x" style={{ color: 'black' }} /></a>
                                    <a href="https://www.linkedin.com/in/nasif-reza-146177211/"> <FontAwesomeIcon className="zoom" icon={faLinkedinIn} size="3x" style={{ color: 'black' }} /></a>
                                    <a href="https://www.facebook.com/nirjhor.ahmednasif/"> <FontAwesomeIcon className="zoom" icon={faFacebookSquare} size="3x" style={{ color: 'black' }} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col lg={6} xs={12}>
                            <div style={{ marginLeft: '50px', marginTop: '50px' }}>
                                <h2 style={{ color: 'white', marginBottom: '20px' }}>My Skills:</h2>
                                <h3 style={{ color: 'white', marginBottom: '20px' }}>Expert in:</h3>
                                <div style={{ display: 'flex' }}>
                                    <h5 className="elements">HTML5</h5>
                                    <h5 className="elements">CSS3</h5>
                                    <h5 className="elements">Bootstrap5</h5>
                                    <h5 className="elements">JavaScript</h5>
                                    <h5 className="elements">React.js</h5>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h5 className="elements">Material UI</h5>
                                    <h5 className="elements">Netlify</h5>
                                    <h5 className="elements">React Router</h5>
                                    <h5 className="elements">Firebase</h5>
                                    <h5 className="elements">Heroku</h5>
                                </div>

                                <h3 style={{ color: 'white', marginBottom: '20px', marginTop: '20px' }}>Comfortable with:</h3>
                                <div style={{ display: 'flex' }}>
                                    <h5 className="elements">Node.js</h5>
                                    <h5 className="elements">MongoDB</h5>
                                    <h5 className="elements">C++</h5>
                                </div>

                                <h3 style={{ color: 'white', marginBottom: '20px', marginTop: '20px' }}>Familiar with:</h3>
                                <div style={{ display: 'flex' }}>
                                    <h5 className="elements">Python</h5>
                                    <h5 className="elements">Java</h5>
                                    <h5 className="elements">PHP</h5>
                                    <h5 className="elements">MySQL</h5>
                                    <h5 className="elements">Redux</h5>
                                </div>


                                <h3 style={{ color: 'white', marginBottom: '20px', marginTop: '20px' }}>Embedded System:</h3>
                                <div style={{ display: 'flex' }}>
                                    <h5 className="elements">IoT</h5>
                                    <h5 className="elements">Arduino</h5>
                                    <h5 className="elements">Raspberry pie </h5>
                                </div>


                                <h3 style={{ color: 'white', marginBottom: '20px', marginTop: '20px' }}>Operating System:</h3>
                                <div style={{ display: 'flex' }}>
                                    <h5 className="elements">Windows</h5>
                                </div>

                                <h3 style={{ color: 'white', marginBottom: '20px', marginTop: '20px' }}>Want to work with:</h3>
                                <div style={{ display: 'flex' }}>
                                    <h5 className="elements">HTML</h5>
                                    <h5 className="elements">CSS3</h5>
                                    <h5 className="elements">JavaScript</h5>
                                    <h5 className="elements">React.js</h5>
                                    <h5 className="elements">Node.js</h5>
                                    <h5 className="elements">MongoDB</h5>
                                    <h5 className="elements">Redux</h5>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} xs={12}>
                            <div style={{ marginLeft: '80px', marginTop: '50px' }}>
                                <h2 style={{ color: 'white', marginBottom: '20px' }}>My Education:</h2>
                                <h3 style={{color: 'white'}}>Bachelor of Science in Computer Science and Engineering</h3>
                                <p style={{color: 'white'}}>North South University</p>
                                <p style={{color: 'white'}}>Bashundhara, Dhaka</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="copyRight text-center text-light">
                <p>Copyright @ Nasif Reza || {(new Date()).getFullYear()} All Rights Reserved</p>
                <p>Address: Bashundhara R/A, Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default About;