import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Contact.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedinIn, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

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
        <div className="backColor">
            <div my-5>
                <NavBar></NavBar>
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
                <a href="https://www.linkedin.com/in/nasif-reza-146177211/"> <FontAwesomeIcon className="zoom" icon={faLinkedinIn} size="3x" style={{ color: 'black' }} /></a>
                <a href="https://www.facebook.com/nirjhor.ahmednasif/"> <FontAwesomeIcon className="zoom" icon={faFacebookSquare} size="3x" style={{ color: 'black' }} /></a>
            </div>

            <div style={{ marginLeft: '40%', marginBottom: '50px' }}>
                <h3>Phone No: 01717-511442</h3>
            </div>

            <div className="copyRight text-center text-light">
                <p>Copyright @ Nasif Reza || {(new Date()).getFullYear()} All Rights Reserved</p>
                <p>Address: Bashundhara R/A, Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default Contact;