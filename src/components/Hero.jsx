import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="home">
            {/* Background Image */}
            {/* Background Image */}
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-container">
                    {/* Main Content */}
                    <div className="hero-text animate-fade-in">
                        <p className="hero-tagline">New Orleans Premier Gymnastics Facility</p>
                        <h1 className="hero-title">
                            Building <span className="text-gold">Champions</span>,<br />
                            One Flip at <span className="text-italic">a Time</span>
                        </h1>
                        <p className="hero-description">
                            Training athletes of all skill levels in coordination, balance, flexibility,
                            and strength. Join our positive, supportive community where every child
                            can discover their potential.
                        </p>
                        <div className="hero-buttons">
                            <a href="#classes" className="btn btn-primary btn-lg">
                                Explore Classes
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#registration" className="btn btn-secondary btn-lg">
                                Try a Class – $15
                            </a>
                        </div>
                    </div>

                    {/* Quick Info Cards */}
                    <div className="hero-info-cards animate-fade-in delay-300">
                        <div className="info-card">
                            <div className="info-card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <div className="info-card-content">
                                <h4>Hours</h4>
                                <p>Mon-Thu: 3:30-8pm</p>
                                <p>Fri: 3:30-6:30pm</p>
                                <p>Sat: 9am-2pm</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className="info-card-content">
                                <h4>Location</h4>
                                <p>7800 Earhart Blvd</p>
                                <p>New Orleans, LA 70125</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <div className="info-card-content">
                                <h4>Contact</h4>
                                <p>504-494-6944</p>
                                <p className="text-gold">info@crescentcitygymnastics.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator animate-float">
                <span>Scroll</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>

            {/* Announcement Banner */}
            <div className="hero-announcement">
                <div className="announcement-content">
                    <span className="announcement-icon">🎄</span>
                    <p>
                        <strong>Holiday Notice:</strong> We will be CLOSED Dec. 24th - Jan. 2nd for Winter Break.
                        <span className="text-gold">Happy Holidays!</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
