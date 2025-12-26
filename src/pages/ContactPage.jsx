import { useEffect, useState } from 'react';
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        classInterest: '',
        message: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Thank you for your inquiry! We will contact you shortly.');
    };

    const enrollSteps = [
        {
            step: 1,
            icon: '📞',
            title: 'Contact Us',
            description: 'Call or email to sign up for an open class or schedule a trial.',
        },
        {
            step: 2,
            icon: '📝',
            title: 'Complete Registration',
            description: 'Fill out the registration form and submit payment before first class.',
        },
        {
            step: 3,
            icon: '🤸',
            title: 'Start Training',
            description: 'Arrive in proper attire and let the fun begin!',
        },
    ];

    const policies = [
        {
            icon: '🎯',
            title: 'Trial Class',
            content: '$15 per trial (one trial allowed)',
        },
        {
            icon: '🔄',
            title: 'Make-Up Class',
            content: '1 per month • 2nd Friday at 6pm',
        },
        {
            icon: '📅',
            title: 'Enrollment',
            content: 'Rolling enrollment available year-round',
        },
        {
            icon: '👗',
            title: 'Attire',
            content: 'Leotard or fitted clothes • No socks/shoes/jewelry',
        },
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-bg"></div>
                <div className="contact-hero-content">
                    <p className="contact-subtitle animate-slide-up">Get in Touch</p>
                    <h1 className="contact-title animate-slide-up stagger-1">
                        Contact & <span className="text-gold">Registration</span>
                    </h1>
                    <p className="contact-description animate-slide-up stagger-2">
                        Ready to start your gymnastics journey? We're here to help!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="form-card luxury-card reveal">
                            <h2>Send Us a Message</h2>
                            <p className="form-subtitle">We'll get back to you within 24 hours</p>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="parentName">Parent/Guardian Name *</label>
                                        <input
                                            type="text"
                                            id="parentName"
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="(504) 555-0123"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="childAge">Child's Age</label>
                                        <input
                                            type="text"
                                            id="childAge"
                                            name="childAge"
                                            value={formData.childAge}
                                            onChange={handleChange}
                                            placeholder="e.g., 5 years old"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="childName">Child's Name</label>
                                    <input
                                        type="text"
                                        id="childName"
                                        name="childName"
                                        value={formData.childName}
                                        onChange={handleChange}
                                        placeholder="Child's full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="classInterest">Class Interest</label>
                                    <select
                                        id="classInterest"
                                        name="classInterest"
                                        value={formData.classInterest}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a class...</option>
                                        <option value="prek">Pre-K (Ages 2.5-5)</option>
                                        <option value="tumble-me">Tumble with Me (Ages 1.5-2.5)</option>
                                        <option value="kindergym">KinderGym (Ages 5-6)</option>
                                        <option value="basic">Basic (Ages 6+)</option>
                                        <option value="tumbling">Tumbling (Ages 8+)</option>
                                        <option value="hot-shots">Hot Shots (Ages 4-6)</option>
                                        <option value="acro">Acro Fundamentals (Ages 6+)</option>
                                        <option value="private">Private Lessons</option>
                                        <option value="trial">Trial Class</option>
                                        <option value="other">Other / Not Sure</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your child's experience level, goals, or any questions..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg submit-btn">
                                    Send Message
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="contact-sidebar">
                            {/* Contact Card */}
                            <div className="info-card glass-gold reveal stagger-1">
                                <h3>Contact Information</h3>

                                <div className="info-items">
                                    <a href="tel:504-494-6944" className="info-item hover-scale">
                                        <div className="info-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                            </svg>
                                        </div>
                                        <div className="info-content">
                                            <span className="info-label">Phone</span>
                                            <span className="info-value">504-494-6944</span>
                                        </div>
                                    </a>

                                    <a href="mailto:info@crescentcitygymnastics.com" className="info-item hover-scale">
                                        <div className="info-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div className="info-content">
                                            <span className="info-label">Email</span>
                                            <span className="info-value">info@crescentcitygymnastics.com</span>
                                        </div>
                                    </a>

                                    <div className="info-item">
                                        <div className="info-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div className="info-content">
                                            <span className="info-label">Location</span>
                                            <span className="info-value">7800 Earhart Blvd<br />New Orleans, LA 70125</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="https://maps.google.com/?q=7800+Earhart+Blvd+New+Orleans+LA+70125"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary directions-btn"
                                >
                                    Get Directions
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                </a>
                            </div>

                            {/* Hours Card */}
                            <div className="hours-card glass reveal stagger-2">
                                <h3>Hours of Operation</h3>
                                <div className="hours-list">
                                    <div className="hours-row">
                                        <span>Mon - Thu</span>
                                        <span>3:30pm - 8pm</span>
                                    </div>
                                    <div className="hours-row">
                                        <span>Friday</span>
                                        <span>3:30pm - 6:30pm</span>
                                    </div>
                                    <div className="hours-row">
                                        <span>Saturday</span>
                                        <span>9am - 2pm</span>
                                    </div>
                                    <div className="hours-row closed">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Enroll */}
            <section className="enroll-section">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">Getting Started</p>
                        <h2>How to <span>Enroll</span></h2>
                    </div>

                    <div className="enroll-steps">
                        {enrollSteps.map((step, index) => (
                            <div
                                key={step.step}
                                className={`enroll-step luxury-card hover-lift reveal stagger-${index + 1}`}
                            >
                                <div className="step-number">{step.step}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Policies */}
            <section className="policies-section">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">Good to Know</p>
                        <h2>Policies & <span>Guidelines</span></h2>
                    </div>

                    <div className="policies-grid">
                        {policies.map((policy, index) => (
                            <div
                                key={policy.title}
                                className={`policy-card glass hover-glow reveal stagger-${index + 1}`}
                            >
                                <span className="policy-icon">{policy.icon}</span>
                                <div className="policy-content">
                                    <h4>{policy.title}</h4>
                                    <p>{policy.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="final-cta glass-gold reveal">
                        <div className="cta-content">
                            <h2>Ready to Get Started?</h2>
                            <p>Join New Orleans' premier gymnastics facility today!</p>
                        </div>
                        <div className="cta-buttons">
                            <a href="tel:504-494-6944" className="btn btn-primary btn-lg">
                                Call Now
                            </a>
                            <a href="/pricing" className="btn btn-secondary btn-lg">
                                View Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
