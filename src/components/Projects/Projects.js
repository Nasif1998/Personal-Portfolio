import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';
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
import football1 from '../../proScreen/football 1.PNG';
import football2 from '../../proScreen/football2.PNG';
import football3 from '../../proScreen/football3.PNG';
import soccer1 from '../../proScreen/soccer1.PNG';
import soccer2 from '../../proScreen/soccer2.PNG';


const Projects = () => {
    return (
        <div className="backColor">
            <div my-5>
                <NavBar></NavBar>
            </div>
            <div>
                <h1 style={{marginBottom: '60px'}} className="text-light text-center">My Projects</h1>
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



            <div style={{marginTop: '50px'}} className="column justify-content-center">
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


            <div style={{marginTop: '50px'}} className="column justify-content-center">
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


            <div style={{marginTop: '50px'}} className="column justify-content-center">
                <div>
                    <Container className="card">
                        <Row>
                            <Col lg={6} xs={12}>
                                <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 imgDec"
                                            src={football1}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 imgDec"
                                            src={football2}
                                            alt="Second slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 imgDec"
                                            src={football3}
                                            alt="Third slide"
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </Col>

                            <Col lg={6} xs={12}>
                                <div>
                                    <h3 style={{ color: 'sandybrown' }}>Football For All</h3>
                                    <p>This is basically a football app type project. In this site people can get information about Premier League's top 20 teams.</p>
                                    <p>Features in this project: </p>
                                    <ul>
                                        <li>In the home site there are list of 20 teams, decorated as cart and each cart has explore button.</li>
                                        <li>By clicking exploring button we can see the detail information about respective football club.</li>
                                        <li>In the bottom there are twitter, facebook and youtube icons. By clicking we can go to the respective site.</li>
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
                                    <h5 className="elements">React Router</h5>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <a href="https://stupefied-mcnulty-2ddfb9.netlify.app/" class="btn btn-info">Live</a>
                                    <a href="https://github.com/Nasif1998/Football-For-All" class="btn btn-dark">Github</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>


            <div style={{marginTop: '50px'}} className="column justify-content-center">
                <div>
                    <Container className="card">
                        <Row>
                            <Col lg={6} xs={12}>
                                <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 imgDec"
                                            src={soccer1}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 imgDec"
                                            src={soccer2}
                                            alt="Second slide"
                                        />

                                    </Carousel.Item>
                                    
                                </Carousel>
                            </Col>

                            <Col lg={6} xs={12}>
                                <div>
                                    <h3 style={{ color: 'sandybrown' }}>World Soccer League</h3>
                                    <p>This is basically a fantasy football app type project. In this site people can select players for their fantasy team and can see the costs.</p>
                                    <p>Features in this project: </p>
                                    <ul>
                                        <li>In the home there are list of football players with value.</li>
                                        <li>By clicking add players button one can select players for his team.</li>
                                        <li>In the cart list one can see total cost of players.</li>
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
                                    <h5 className="elements">React Router</h5>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <a href="https://stupefied-mcnulty-2ddfb9.netlify.app/" class="btn btn-info">Live</a>
                                    <a href="https://github.com/Nasif1998/Football-For-All" class="btn btn-dark">Github</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="copyRight text-center text-light">
                <p>Copyright @ Nasif Reza || {(new Date()).getFullYear()} All Rights Reserved</p>
                <p>Address: Bashundhara R/A, Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default Projects;