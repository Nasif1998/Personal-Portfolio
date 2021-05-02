import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import { Col, Container, Row, Carousel, Button } from 'react-bootstrap';
import right1 from '../../proScreen/right1.PNG';
import right2 from '../../proScreen/right2.PNG';
import right3 from '../../proScreen/right3.PNG';
import book1 from '../../proScreen/book1.PNG';
import book2 from '../../proScreen/book2.PNG';
import book3 from '../../proScreen/book3.PNG';
import drive1 from '../../proScreen/drive1.PNG';
import drive2 from '../../proScreen/drive2.PNG';
import drive3 from '../../proScreen/drive3.PNG';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedinIn, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    // const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    // const numBalls = 50;
    // const balls = [];

    // for (let i = 0; i < numBalls; i++) {
    //     let ball = document.createElement("div");
    //     ball.classList.add("ball");
    //     ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    //     ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    //     ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    //     ball.style.transform = `scale(${Math.random()})`;
    //     ball.style.width = `${Math.random()}em`;
    //     ball.style.height = ball.style.width;

    //     balls.push(ball);
    //     document.body.append(ball);
    // }

    // // Keyframes
    // balls.forEach((el, i, ra) => {
    //     let to = {
    //         x: Math.random() * (i % 2 === 0 ? -11 : 11),
    //         y: Math.random() * 12
    //     };

    //     let anim = el.animate(
    //         [
    //             { transform: "translate(0, 0)" },
    //             { transform: `translate(${to.x}rem, ${to.y}rem)` }
    //         ],
    //         {
    //             duration: (Math.random() + 1) * 2000, // random duration
    //             direction: "alternate",
    //             fill: "both",
    //             iterations: Infinity,
    //             easing: "ease-in-out"
    //         }
    //     );
    // });

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hgb2q9q', 'template_ha48kl8', e.target, 'user_XoyvxG4MqFZKpXwKhXGrm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="anime">
                <div style={{ textAlign: 'center', padding: '200px 0' }}>
                    <h2>Hello, I'm Nasif Reza</h2>
                    <h3 style={{ color: 'white' }}>Web Developer, Programmer, Engineer</h3>
                    <p style={{ color: 'white' }}>New front-end developer who is comfortable working with React, JavaScript, HTML/CSS to deliver exceptional customer experiences. Currently looking for an opportunity to work in a software company that needs a React developer. I'm very passionate about coding and really comfortable with JavaScript and C++. I work very hard and I'm quick learner and self motivated.</p>
                    <br />
                    <a href="linkedin.com/in/nasif-reza-146177211" class="btn btn-warning">Hire Me</a>
                    <a href="https://drive.google.com/file/d/1nhN8nk8p1K97ZpDkCbRGl942hAbSXHc3/view?usp=sharing" class="btn btn-warning">My Resume</a>
                </div>
            </div>

            <div className="home-body">
                <div>
                    <div>
                        <h1 style={{ marginBottom: '60px' }} className=" text-center">Some of My Projects</h1>
                    </div>
                    <div className="column justify-content-center">
                        <div>
                            <Container className="card">
                                <Row>
                                    <Col lg={6} xs={12}>
                                        <Carousel fade>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={right1}
                                                    alt="First slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={right2}
                                                    alt="Second slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={right3}
                                                    alt="Third slide"
                                                />

                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>

                                    <Col lg={6} xs={12}>
                                        <div>
                                            <h3 style={{ color: 'sandybrown' }}>Right Drive Safety</h3>
                                            <p>This is basically an online booking service for learning driving. In my project I tried to show services for people for learning.</p>
                                            <p>Features in this project: </p>
                                            <ul>
                                                <li>After entering in the app there are home, dashboard, admin, blogs, contact and login.</li>
                                                <li>You should first log in to the app.</li>
                                                <li>Then you can choose services buying with visa card.</li>
                                                <li>You can also see previous ordered services.</li>
                                                <li>Admin can add and remove services and order list from database.</li>
                                            </ul>
                                        </div>
                                        <h4>Technology</h4>
                                        <div style={{ display: 'flex' }}>
                                            <h5 className="elements">HTML5</h5>
                                            <h5 className="elements">CSS3</h5>
                                            <h5 className="elements">Bootstrap5</h5>
                                            <h5 className="elements">JavaScript</h5>
                                            <h5 className="elements">React.js</h5>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <h5 className="elements">React BootStrap</h5>
                                            <h5 className="elements">Node.js</h5>
                                            <h5 className="elements">React Router</h5>
                                            <h5 className="elements">Firebase</h5>
                                            <h5 className="elements">Heroku</h5>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <h5 className="elements">MongoDB</h5>
                                        </div>

                                        <div style={{ display: 'flex' }}>
                                            <a href="https://dri-cub.web.app/" class="btn btn-info">Live</a>
                                            <a href="https://github.com/Nasif1998/Right-Drive-Safety" class="btn btn-dark">Github</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>


                    <div style={{ marginTop: '50px' }} className="column justify-content-center">
                        <div>
                            <Container className="card">
                                <Row>
                                    <Col lg={6} xs={12}>
                                        <Carousel fade>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={book1}
                                                    alt="First slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={book2}
                                                    alt="Second slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={book3}
                                                    alt="Third slide"
                                                />

                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>

                                    <Col lg={6} xs={12}>
                                        <div>
                                            <h3 style={{ color: 'sandybrown' }}>Book Attic</h3>
                                            <p>This is basically an online books ordering service. In my project I tried to show books for people for reading.</p>
                                            <p>Features in this project: </p>
                                            <ul>
                                                <li>After entering in the app in the navbar there are home, orders, admin, deals and log in.</li>
                                                <li>You should first log into the app because without it you can't use the app.</li>
                                                <li>Then you can choose books for buying.</li>
                                                <li>You can also see your previous ordered books.</li>
                                                <li>Admin can add and remove books from database and home page.</li>
                                            </ul>
                                        </div>
                                        <h4>Technology</h4>
                                        <div style={{ display: 'flex' }}>
                                            <h5 className="elements">HTML5</h5>
                                            <h5 className="elements">CSS3</h5>
                                            <h5 className="elements">Bootstrap5</h5>
                                            <h5 className="elements">JavaScript</h5>
                                            <h5 className="elements">React.js</h5>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <h5 className="elements">React BootStrap</h5>
                                            <h5 className="elements">Node.js</h5>
                                            <h5 className="elements">React Router</h5>
                                            <h5 className="elements">Firebase</h5>
                                            <h5 className="elements">Heroku</h5>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <h5 className="elements">MongoDB</h5>
                                        </div>

                                        <div style={{ display: 'flex' }}>
                                            <a href="https://book-shop-80fa7.web.app/" class="btn btn-info">Live</a>
                                            <a href="https://github.com/Nasif1998/Book-Attic-client" class="btn btn-dark">Github</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>


                    <div style={{ marginTop: '50px' }} className="column justify-content-center">
                        <div>
                            <Container className="card">
                                <Row>
                                    <Col lg={6} xs={12}>
                                        <Carousel fade>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={drive1}
                                                    alt="First slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={drive2}
                                                    alt="Second slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 imgDec"
                                                    src={drive3}
                                                    alt="Third slide"
                                                />

                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>

                                    <Col lg={6} xs={12}>
                                        <div>
                                            <h3 style={{ color: 'sandybrown' }}>We Drive You</h3>
                                            <p>This is basically a online vehicles booking service. In my project I tried to show 4 vehicles for people for travelling from one place to another place.</p>
                                            <p>Features in this project: </p>
                                            <ul>
                                                <li>After entering in the app in the navbar there are home, destination, contact, blog and log in.</li>
                                                <li>You should first log into the app because without it you can't use the app.</li>
                                                <li>If you have no account you have to sign up after passing the validation.</li>
                                                <li>You can also sign in with google and facebook account.</li>
                                                <li>Then you can go to the description. There you can input route.</li>
                                            </ul>
                                        </div>
                                        <h4>Technology</h4>
                                        <div style={{ display: 'flex' }}>
                                            <h5 className="elements">HTML5</h5>
                                            <h5 className="elements">CSS3</h5>
                                            <h5 className="elements">Bootstrap5</h5>
                                            <h5 className="elements">JavaScript</h5>
                                            <h5 className="elements">React.js</h5>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <h5 className="elements">React BootStrap</h5>
                                            <h5 className="elements">MongoDB</h5>
                                            <h5 className="elements">React Router</h5>
                                            <h5 className="elements">Firebase</h5>
                                        </div>

                                        <div style={{ display: 'flex' }}>
                                            <a href="https://urban-rides-de25e.web.app/" class="btn btn-info">Live</a>
                                            <a href="https://github.com/Nasif1998/we-drive-you-client" class="btn btn-dark">Github</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                </div>

                <p style={{marginTop: '20px', color: 'skyblue'}} className="text-center"> <Link to="../Projects">
                    <button>More Projects</button>
                </Link></p>

                <div style={{ marginBottom: '60px', marginTop: '60px' }}>
                    <h1 className="text-center">My Blogs</h1>
                    <p>Coming soon.....</p>
                </div>

                <div>
                    <section className="contact my-5 py-5">
                        <div className="container justify-content-center">
                            <div className="section-header text-center text-white mb-5">
                                <h5 className="text-primary">Contact</h5>
                                <h1>Always  connect with us</h1>
                            </div>
                            <div className="col-md-9 mx-auto">
                                <form onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name *" name="name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email Address *" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject *" name="subject" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="submit" className="btn-btn-info" value="Send Message" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </section>
                </div>

                <div style={{ marginLeft: '45%', marginBottom: '50px' }}>
                    <a href="https://github.com/Nasif1998"> <FontAwesomeIcon className="zoom" icon={faGithubSquare} size="3x" style={{ color: 'black' }} /></a>
                    <a href="linkedin.com/in/nasif-reza-146177211"> <FontAwesomeIcon className="zoom" icon={faLinkedinIn} size="3x" style={{ color: 'black' }} /></a>
                    <a href="https://www.facebook.com/nirjhor.ahmednasif/"> <FontAwesomeIcon className="zoom" icon={faFacebookSquare} size="3x" style={{ color: 'black' }} /></a>
                </div>

                <div className="copyRight text-center text-light">
                    <p>Copyright @ Nasif Reza || {(new Date()).getFullYear()} All Rights Reserved</p>
                    <p>Address: Bashundhara R/A, Dhaka, Bangladesh</p>
                </div>
            </div>

        </div>
    );
};

export default Home;