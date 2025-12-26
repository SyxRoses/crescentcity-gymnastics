import { useEffect } from 'react';
import './CoachesPage.css';

function CoachesPage() {
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

    const owners = [
        {
            name: 'Gawain DuPree',
            role: 'Owner / Director / Coach',
            specialty: 'Acrobatic Gymnastics Director',
            initials: 'GD',
        },
        {
            name: 'Julie DuPree',
            role: 'Co-Owner / Coach',
            specialty: 'Artistic Gymnastics Director',
            initials: 'JD',
        },
    ];

    const coaches = [
        {
            name: 'Nicole Barrilleaux',
            role: 'Manager / Coach / Choreographer',
            specialty: 'Acrobatic Gymnastics Team, Acro Pre-Team',
            position: 'Co-Director',
            initials: 'NB',
        },
        {
            name: 'Annie Planchet',
            role: 'Shift Supervisor / Coach',
            specialty: 'Jr. & Sr. Artistic Team, Pre-K, Intermediate, Acro Fundamentals',
            initials: 'AP',
        },
        {
            name: 'Laura Howe',
            role: 'Coach',
            specialty: 'Jr. & Sr. Artistic Team, Hot Shots, Tumbling',
            initials: 'LH',
        },
        {
            name: 'Sarah Crayton',
            role: 'Coach',
            specialty: 'Jr. & Sr. Artistic Team',
            initials: 'SC',
        },
        {
            name: 'Brody Seither',
            role: 'Coach',
            specialty: 'Artistic Team, Tumbling, Pre-K, Tumble w/ Me',
            initials: 'BS',
        },
        {
            name: 'Kenneth Lockett',
            role: 'Coach',
            specialty: 'Basic, Hot Shots, Tumbling',
            initials: 'KL',
        },
        {
            name: 'Dalvin Berry',
            role: 'Coach',
            specialty: 'Basic, Tumbling',
            initials: 'DB',
        },
        {
            name: 'Briton Desantis',
            role: 'Coach',
            specialty: 'Pre-K, Basic, Hot Shots',
            initials: 'BD',
        },
        {
            name: 'Kaylee Desantis',
            role: 'Coach',
            specialty: 'Artistic Team, Kindergym, Acro Team',
            initials: 'KD',
        },
    ];

    return (
        <div className="coaches-page">
            {/* Hero Section */}
            <section className="coaches-hero">
                <div className="coaches-hero-bg"></div>
                <div className="coaches-hero-content">
                    <p className="coaches-subtitle animate-slide-up">The Heart of CCG</p>
                    <h1 className="coaches-title animate-slide-up stagger-1">
                        Meet Our <span className="text-gold">Coaches</span>
                    </h1>
                    <p className="coaches-description animate-slide-up stagger-2">
                        Safety-certified professionals dedicated to developing every athlete's potential.
                    </p>
                </div>
            </section>

            {/* Owners Section */}
            <section className="owners-section">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">Leadership</p>
                        <h2>Owners & <span>Directors</span></h2>
                    </div>

                    <div className="owners-grid">
                        {owners.map((owner, index) => (
                            <div
                                key={owner.name}
                                className={`owner-card luxury-card-featured hover-lift reveal stagger-${index + 1}`}
                            >
                                <div className="owner-avatar">
                                    <span>{owner.initials}</span>
                                </div>
                                <div className="owner-info">
                                    <h3>{owner.name}</h3>
                                    <p className="owner-role">{owner.role}</p>
                                    <span className="owner-specialty">{owner.specialty}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coaches Grid */}
            <section className="coaches-grid-section">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">Our Team</p>
                        <h2>Coaching <span>Staff</span></h2>
                    </div>

                    <div className="coaches-grid">
                        {coaches.map((coach, index) => (
                            <div
                                key={coach.name}
                                className={`coach-card glass hover-glow reveal stagger-${(index % 4) + 1}`}
                            >
                                <div className="coach-avatar">
                                    <span>{coach.initials}</span>
                                </div>
                                <div className="coach-info">
                                    <h4>{coach.name}</h4>
                                    <p className="coach-role">{coach.role}</p>
                                    {coach.position && (
                                        <span className="coach-position">{coach.position}</span>
                                    )}
                                    <p className="coach-specialty">{coach.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="certifications-section">
                <div className="container">
                    <div className="certifications-card glass-gold reveal">
                        <div className="cert-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                            </svg>
                        </div>
                        <div className="cert-content">
                            <h3>Safety Certified</h3>
                            <p>
                                All of our coaches are safety certified and trained in the latest
                                gymnastics techniques. We prioritize the well-being and proper
                                development of every athlete in our program.
                            </p>
                            <div className="cert-badges">
                                <span className="cert-badge">SafeSport Certified</span>
                                <span className="cert-badge">USA Gymnastics</span>
                                <span className="cert-badge">First Aid Trained</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="join-cta-section">
                <div className="container">
                    <div className="join-cta luxury-card reveal">
                        <h2>Ready to Train with Us?</h2>
                        <p>Experience the difference of training with our dedicated coaching staff.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-lg">
                                Book a Trial Class
                            </a>
                            <a href="/pricing" className="btn btn-secondary btn-lg">
                                View Class Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CoachesPage;
