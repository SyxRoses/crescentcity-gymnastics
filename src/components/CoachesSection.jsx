import './CoachesSection.css';

function CoachesSection() {
    const coaches = [
        {
            name: 'Gawain DuPree',
            role: 'Owner / Director',
            specialty: 'Acrobatic Gymnastics Director',
            featured: true,
        },
        {
            name: 'Julie DuPree',
            role: 'Co-Owner / Coach',
            specialty: 'Artistic Gymnastics Director',
            featured: true,
        },
        {
            name: 'Nicole Barrilleaux',
            role: 'Manager / Coach / Choreographer',
            specialty: 'Acro Team Co-Director',
            featured: false,
        },
        {
            name: 'Annie Planchet',
            role: 'Shift Supervisor / Coach',
            specialty: 'Jr. & Sr. Artistic Team, Pre-K',
            featured: false,
        },
        {
            name: 'Laura Howe',
            role: 'Coach',
            specialty: 'Artistic Team, Hot Shots, Tumbling',
            featured: false,
        },
        {
            name: 'Sarah Crayton',
            role: 'Coach',
            specialty: 'Jr. & Sr. Artistic Team',
            featured: false,
        },
        {
            name: 'Brody Seither',
            role: 'Coach',
            specialty: 'Artistic Team, Tumbling, Pre-K',
            featured: false,
        },
        {
            name: 'Briton Desantis',
            role: 'Coach',
            specialty: 'Pre-K, Basic, Hot Shots',
            featured: false,
        },
    ];

    return (
        <section className="coaches-section section" id="coaches">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-header-title">
                        <p className="section-header-subtitle">Meet the Team</p>
                        <h2>Our <span>Coaches</span></h2>
                    </div>
                    <p className="section-header-description">
                        Safety-certified professionals dedicated to developing each
                        athlete's discipline, confidence, and abilities.
                    </p>
                </div>

                {/* Featured Coaches */}
                <div className="coaches-featured">
                    {coaches.filter(c => c.featured).map((coach, index) => (
                        <div key={index} className="coach-card featured">
                            <div className="coach-avatar">
                                <span>{coach.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div className="coach-info">
                                <h3>{coach.name}</h3>
                                <p className="coach-role">{coach.role}</p>
                                <p className="coach-specialty">{coach.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* All Coaches Grid */}
                <div className="coaches-grid">
                    {coaches.filter(c => !c.featured).map((coach, index) => (
                        <div key={index} className="coach-card">
                            <div className="coach-avatar small">
                                <span>{coach.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div className="coach-info">
                                <h4>{coach.name}</h4>
                                <p className="coach-role">{coach.role}</p>
                                <p className="coach-specialty">{coach.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Philosophy Banner */}
                <div className="philosophy-banner">
                    <div className="philosophy-content">
                        <h3>Our Philosophy</h3>
                        <p>
                            Our gym has a very positive training program for athletes of ALL skill levels.
                            We aim to improve each child's discipline, confidence, self-esteem, and ability
                            to perform. Your child's experience here will be a strong foundation for the
                            development of a mature, self-aware, and disciplined adult.
                        </p>
                        <div className="philosophy-badge">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                            </svg>
                            <div>
                                <strong>SafeSport Certified</strong>
                                <span>Health & safety are our biggest priorities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoachesSection;
