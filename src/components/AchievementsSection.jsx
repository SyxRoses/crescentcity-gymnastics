import './AchievementsSection.css';

function AchievementsSection() {
    const acroAchievements = [
        { names: 'Kyla & Lena', level: '11-16 Women\'s Pair', achievement: 'USA International Development Team', place: '4th' },
        { names: 'Nickobe & Kaelyn', level: 'Level 9 Women\'s Pair', achievement: 'SILVER Medalists', place: '2nd' },
        { names: 'Zora, Min Jee & Jane Harold', level: 'Level 9 Women\'s Group', achievement: '', place: '5th' },
        { names: 'Leah & Kamrin', level: 'Level 8 Women\'s Pair', achievement: 'BRONZE Medalists', place: '3rd' },
        { names: 'Shi & Eve', level: 'Level 7 Women\'s Pair', achievement: 'GOLD Medalists', place: '1st' },
    ];

    const artisticAchievements = [
        { name: 'Hanafy Smith', achievement: '1st Floor, 4th AA', note: 'Qualified to Regional Championships!' },
        { name: 'Penelope Henderson', achievement: '1st All-Around', note: 'Level 3' },
        { name: 'Quora Deskins', achievement: '1st All-Around', note: 'Level 3' },
        { name: 'Level 3 Team', achievement: '1st Place Team Award', note: '' },
        { name: 'Level 2 Team', achievement: '3rd Place Team Award', note: '' },
    ];

    return (
        <section className="achievements-section section" id="successes">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-header-title">
                        <p className="section-header-subtitle">2024 Championships</p>
                        <h2>Our <span>Successes</span></h2>
                    </div>
                    <p className="section-header-description">
                        Our dedicated coaches and talented athletes consistently achieve
                        excellence at local, state, regional, and national competitions.
                    </p>
                </div>

                {/* Stats */}
                <div className="achievement-stats">
                    <div className="stat-item">
                        <span className="stat-value">30+</span>
                        <span className="stat-label">Acro Athletes</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">35+</span>
                        <span className="stat-label">Artistic Athletes</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">7</span>
                        <span className="stat-label">National Medals</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">1</span>
                        <span className="stat-label">USA Development Team</span>
                    </div>
                </div>

                {/* Achievement Cards Grid */}
                <div className="achievements-grid">
                    {/* Acrobatics Card */}
                    <div className="achievement-card">
                        <div className="achievement-card-header">
                            <div className="achievement-badge">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            </div>
                            <div>
                                <h3>Acrobatics Team</h3>
                                <p className="achievement-event">2024 USA Gym Champs</p>
                            </div>
                        </div>
                        <div className="achievement-list">
                            {acroAchievements.map((item, index) => (
                                <div key={index} className="achievement-item">
                                    <div className="achievement-place">
                                        <span className={`place-badge place-${item.place}`}>
                                            {item.place === '1st' && '🥇'}
                                            {item.place === '2nd' && '🥈'}
                                            {item.place === '3rd' && '🥉'}
                                            {!['1st', '2nd', '3rd'].includes(item.place) && `#${item.place.replace(/\D/g, '')}`}
                                        </span>
                                    </div>
                                    <div className="achievement-details">
                                        <strong>{item.names}</strong>
                                        <span className="achievement-level">{item.level}</span>
                                        {item.achievement && (
                                            <span className="achievement-note">{item.achievement}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Artistic Card */}
                    <div className="achievement-card">
                        <div className="achievement-card-header">
                            <div className="achievement-badge artistic">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                                </svg>
                            </div>
                            <div>
                                <h3>Artistic Team</h3>
                                <p className="achievement-event">2024 State Championships</p>
                            </div>
                        </div>
                        <div className="achievement-list">
                            {artisticAchievements.map((item, index) => (
                                <div key={index} className="achievement-item">
                                    <div className="achievement-place">
                                        <span className="place-badge place-1st">🏆</span>
                                    </div>
                                    <div className="achievement-details">
                                        <strong>{item.name}</strong>
                                        <span className="achievement-level">{item.achievement}</span>
                                        {item.note && (
                                            <span className="achievement-note">{item.note}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Join Team CTA */}
                <div className="achievements-cta">
                    <h3>Ready to join our winning team?</h3>
                    <p>Our competition teams are by invitation or tryout. Contact us to learn more about the path to competitive gymnastics.</p>
                    <div className="cta-buttons">
                        <a href="#teams" className="btn btn-primary">View Competition Teams</a>
                        <a href="#contact" className="btn btn-secondary">Schedule a Tryout</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AchievementsSection;
