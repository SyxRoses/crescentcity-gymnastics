import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

function AboutPage() {
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

    const values = [
        {
            icon: '🎯',
            title: 'Discipline',
            description: 'Building focus and dedication through structured training programs.'
        },
        {
            icon: '💪',
            title: 'Confidence',
            description: 'Empowering athletes to believe in themselves and their abilities.'
        },
        {
            icon: '⭐',
            title: 'Self-Esteem',
            description: 'Celebrating every achievement, big or small, to build strong character.'
        },
        {
            icon: '🏆',
            title: 'Performance',
            description: 'Developing skills that lead to excellence in and out of the gym.'
        },
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-bg"></div>
                <div className="about-hero-content">
                    <p className="about-subtitle animate-slide-up">Who We Are</p>
                    <h1 className="about-title animate-slide-up stagger-1">
                        Our <span className="text-gold">Philosophy</span>
                    </h1>
                    <p className="about-description animate-slide-up stagger-2">
                        Building champions through positive training, dedication, and unwavering support.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy-section">
                <div className="container">
                    <div className="philosophy-card glass-gold reveal">
                        <div className="philosophy-icon">🤸‍♀️</div>
                        <blockquote className="philosophy-quote">
                            "Our gym has a very positive training program for athletes of ALL skill levels.
                            Our coaches are Safety Certified and qualified to train in areas of coordination,
                            balance, flexibility, and strength. Our goal is to improve each child's discipline,
                            confidence, self-esteem, and ability to perform."
                        </blockquote>
                        <p className="philosophy-emphasis">
                            Your child's experience here will be a strong foundation for the development
                            of a mature, self-aware, and disciplined adult.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">What We Build</p>
                        <h2>Core <span>Values</span></h2>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className={`value-card luxury-card hover-lift reveal stagger-${index + 1}`}
                            >
                                <span className="value-icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SafeSport Section */}
            <section className="safesport-section">
                <div className="container">
                    <div className="safesport-card reveal">
                        <div className="safesport-content">
                            <div className="safesport-badge">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                                </svg>
                            </div>
                            <div className="safesport-text">
                                <h3>SafeSport Certified</h3>
                                <p>
                                    Health and safety are our biggest priorities. Our gym is proudly affiliated
                                    with SafeSport, ensuring a safe environment for all our athletes and coaches.
                                </p>
                                <a
                                    href="https://safesport.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Learn About SafeSport
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team CTA */}
            <section className="team-cta-section">
                <div className="container">
                    <div className="team-cta glass reveal">
                        <h2>Meet Our Amazing Team</h2>
                        <p>Our dedicated coaches bring years of experience and passion to every class.</p>
                        <div className="cta-buttons">
                            <Link to="/coaches" className="btn btn-primary btn-lg">
                                Meet Our Coaches
                            </Link>
                            <Link to="/teams" className="btn btn-secondary btn-lg">
                                Competition Teams
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
