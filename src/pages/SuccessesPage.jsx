import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SuccessesPage.css';

function SuccessesPage() {
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

    const acroAchievements = [
        {
            athletes: 'Kyla & Lena',
            category: '11-16 Women\'s Pair',
            achievement: 'Selected to USA International Development Team',
            place: '4th Place',
            medal: null,
        },
        {
            athletes: 'Nickobe & Kaelyn',
            category: 'Level 9 Women\'s Pair',
            achievement: 'SILVER Medalists',
            place: '2nd Place',
            medal: '🥈',
        },
        {
            athletes: 'Zora, Min Jee & Jane Harold',
            category: 'Level 9 Women\'s Group',
            achievement: '5th Place',
            place: '5th Place',
            medal: null,
        },
        {
            athletes: 'Leah & Kamrin',
            category: 'Level 8 Women\'s Pair',
            achievement: 'BRONZE Medalists',
            place: '3rd Place',
            medal: '🥉',
        },
        {
            athletes: 'Kaia & Corinne',
            category: 'Level 7 Women\'s Pair',
            achievement: '4th Place',
            place: '4th Place',
            medal: null,
        },
        {
            athletes: 'Shi & Eve',
            category: 'Level 7 Women\'s Pair',
            achievement: 'GOLD Medalists',
            place: '1st Place',
            medal: '🥇',
        },
        {
            athletes: 'Anya & Rojanae\'',
            category: 'Level 7 Women\'s Pair',
            achievement: '4th Place',
            place: '4th Place',
            medal: null,
        },
    ];

    const artisticAchievements = [
        {
            athlete: 'Hanafy Smith',
            achievement: '1st Floor, 4th AA, 5th highest AA score Level 6',
            highlight: 'Qualified to Regional Championships!',
            medal: '🥇',
        },
        {
            athlete: 'Penelope Henderson',
            achievement: '1st AA, Level 3',
            highlight: 'All-Around Champion',
            medal: '🥇',
        },
        {
            athlete: 'Quora Deskins',
            achievement: '1st AA, Level 3',
            highlight: 'All-Around Champion',
            medal: '🥇',
        },
        {
            athlete: 'Level 3 Team',
            achievement: '1st Place Team Award',
            highlight: 'Team Champions',
            medal: '🏆',
        },
        {
            athlete: 'Level 2 Team',
            achievement: '3rd Place Team Award',
            highlight: null,
            medal: '🥉',
        },
        {
            athlete: 'Level 1 Team',
            achievement: '3rd Place Team Award',
            highlight: null,
            medal: '🥉',
        },
    ];

    return (
        <div className="successes-page">
            {/* Hero Section */}
            <section className="successes-hero">
                <div className="successes-hero-bg"></div>
                <div className="successes-hero-content">
                    <p className="successes-subtitle animate-slide-up">Celebrating Excellence</p>
                    <h1 className="successes-title animate-slide-up stagger-1">
                        Our <span className="text-gold">Successes!</span>
                    </h1>
                    <p className="successes-description animate-slide-up stagger-2">
                        Our team is made up of dedicated and talented coaches and athletes, and we
                        are proud of our many successes, including our competition teams who have
                        an impressive record of achievements.
                    </p>
                </div>
            </section>

            {/* Update Notice */}
            <section className="notice-section">
                <div className="container">
                    <div className="notice-card glass reveal">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                        <p>This page is updated regularly with our team's most recent successes!</p>
                    </div>
                </div>
            </section>

            {/* Acro Team Achievements */}
            <section className="achievements-section">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">National Competition</p>
                        <h2>Acrobatics Team <span>2024 USA Gym Champs!</span></h2>
                    </div>

                    <div className="achievements-grid">
                        {acroAchievements.map((item, index) => (
                            <div
                                key={item.athletes}
                                className={`achievement-card ${item.medal ? 'has-medal' : ''} luxury-card hover-lift reveal stagger-${(index % 4) + 1}`}
                            >
                                {item.medal && (
                                    <span className="achievement-medal">{item.medal}</span>
                                )}
                                <div className="achievement-content">
                                    <h4 className="achievement-athletes">{item.athletes}</h4>
                                    <p className="achievement-category">{item.category}</p>
                                    <p className="achievement-result">{item.achievement}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Artistic Team Achievements */}
            <section className="achievements-section achievements-section-alt">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">State Competition</p>
                        <h2>Artistic Team <span>2024 State Championships!</span></h2>
                    </div>

                    <p className="achievements-intro reveal">
                        Congrats to our Artistic girls at the 2024 STATE CHAMPIONSHIPS!
                    </p>

                    <div className="achievements-grid artistic-grid">
                        {artisticAchievements.map((item, index) => (
                            <div
                                key={item.athlete}
                                className={`achievement-card ${item.medal ? 'has-medal' : ''} luxury-card hover-lift reveal stagger-${(index % 3) + 1}`}
                            >
                                {item.medal && (
                                    <span className="achievement-medal">{item.medal}</span>
                                )}
                                <div className="achievement-content">
                                    <h4 className="achievement-athletes">{item.athlete}</h4>
                                    <p className="achievement-result">{item.achievement}</p>
                                    {item.highlight && (
                                        <span className="achievement-highlight">{item.highlight}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="success-cta-section">
                <div className="container">
                    <div className="success-cta glass-gold reveal">
                        <div className="cta-content">
                            <h2>Be Part of Our Success Story</h2>
                            <p>Join our competition teams and train with champions.</p>
                        </div>
                        <div className="cta-buttons">
                            <Link to="/teams" className="btn btn-primary btn-lg">
                                Learn About Teams
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Inquire About Tryouts
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SuccessesPage;
