import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container">
                {/* Footer Top */}
                <div className="footer-top">
                    {/* Brand & Contact */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <div className="logo-icon">
                                <img src="/logo.png" alt="Crescent City Gymnastics Logo" />
                            </div>
                            <div className="logo-text">
                                <span className="logo-name">Crescent City</span>
                                <span className="logo-tagline">Gymnastics</span>
                            </div>
                        </Link>
                        <p className="footer-description">
                            New Orleans' premier gymnastics facility, training athletes of all
                            skill levels since proudly serving the community.
                        </p>
                        <div className="footer-contact">
                            <a href="tel:504-494-6944" className="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                <span>504-494-6944</span>
                            </a>
                            <a href="mailto:info@crescentcitygymnastics.com" className="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>info@crescentcitygymnastics.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <div className="footer-links-group">
                            <h4>About</h4>
                            <ul>
                                <li><Link to="/about">Our Philosophy</Link></li>
                                <li><Link to="/coaches">Our Coaches</Link></li>
                                <li><Link to="/teams">Competition Teams</Link></li>
                                <li><Link to="/successes">Our Successes</Link></li>
                            </ul>
                        </div>
                        <div className="footer-links-group">
                            <h4>Programs</h4>
                            <ul>
                                <li><a href="/#classes">Classes</a></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/contact">Private Lessons</Link></li>
                            </ul>
                        </div>
                        <div className="footer-links-group">
                            <h4>Get Started</h4>
                            <ul>
                                <li><Link to="/contact">Registration</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/contact">Trial Class</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Hours & Location */}
                    <div className="footer-info">
                        <div className="footer-hours">
                            <h4>Hours</h4>
                            <ul>
                                <li><span>Mon - Thu</span><span>3:30pm - 8pm</span></li>
                                <li><span>Friday</span><span>3:30pm - 6:30pm</span></li>
                                <li><span>Saturday</span><span>9am - 2pm</span></li>
                                <li><span>Sunday</span><span>Closed</span></li>
                            </ul>
                        </div>
                        <div className="footer-location">
                            <h4>Location</h4>
                            <address>
                                7800 Earhart Blvd<br />
                                New Orleans, LA 70125
                            </address>
                            <a
                                href="https://maps.google.com/?q=7800+Earhart+Blvd+New+Orleans+LA+70125"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary btn-sm"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Crescent City Gymnastics. All rights reserved.</p>
                    <a href="https://safesport.org" target="_blank" rel="noopener noreferrer" className="safesport-link">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                        </svg>
                        SafeSport Certified
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
