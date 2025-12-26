import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TeamsPage.css';

function TeamsPage() {
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

    const acroTeam = {
        name: 'Acrobatic Gymnastics Team',
        icon: '🤸‍♀️',
        description: "CCG's Acro team consists of about 30 athletes with ages ranging from 5-19 years and levels ranging from 5 to Senior Elite. Our athletes compete on a local, state-wide, regional, national and international level, resulting in numerous medals and honors.",
        stats: [
            { label: 'Athletes', value: '~30' },
            { label: 'Ages', value: '5-19' },
            { label: 'Levels', value: '5 to Elite' },
        ],
        pricing: [
            { level: 'Pre-Team', price: '$100/month' },
            { level: 'Competition Team', price: 'Starting at $195/month' },
        ],
        note: '*Prices increase with level',
    };

    const artisticTeam = {
        name: "Women's Artistic Gymnastics Team",
        icon: '⭐',
        description: "CCG's Artistic Gymnastics team consists of about 35 girls who compete locally and state-wide in levels 1-7 resulting in numerous individual and team awards state-wide.",
        stats: [
            { label: 'Athletes', value: '~35' },
            { label: 'Levels', value: '1-7' },
            { label: 'Competitions', value: 'Local & State' },
        ],
        pricing: [
            { level: 'Hot Shots', price: '$140/month' },
            { level: 'Pre-Team', price: '$175/month' },
            { level: 'Competition Team', price: 'Starting at $185/month' },
        ],
        note: '*Prices increase with level',
    };

    return (
        <div className="teams-page">
            {/* Hero Section */}
            <section className="teams-hero">
                <div className="teams-hero-bg"></div>
                <div className="teams-hero-content">
                    <p className="teams-subtitle animate-slide-up">Elite Training</p>
                    <h1 className="teams-title animate-slide-up stagger-1">
                        Competition <span className="text-gold">Teams</span>
                    </h1>
                    <p className="teams-description animate-slide-up stagger-2">
                        By invitation or tryout only based on skill level and/or previous experience.
                    </p>
                </div>
            </section>

            {/* Acro Team */}
            <section className="team-section">
                <div className="container">
                    <div className="team-card luxury-card reveal">
                        <div className="team-header">
                            <span className="team-icon">{acroTeam.icon}</span>
                            <h2>{acroTeam.name}</h2>
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <p className="team-description">{acroTeam.description}</p>

                                <div className="team-stats">
                                    {acroTeam.stats.map((stat) => (
                                        <div key={stat.label} className="stat-box">
                                            <span className="stat-value">{stat.value}</span>
                                            <span className="stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="team-pricing glass">
                                <h3>Team Pricing</h3>
                                <div className="pricing-list">
                                    {acroTeam.pricing.map((item) => (
                                        <div key={item.level} className="pricing-row">
                                            <span className="level-name">{item.level}</span>
                                            <span className="level-price">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="pricing-note">{acroTeam.note}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artistic Team */}
            <section className="team-section team-section-alt">
                <div className="container">
                    <div className="team-card luxury-card reveal">
                        <div className="team-header">
                            <span className="team-icon">{artisticTeam.icon}</span>
                            <h2>{artisticTeam.name}</h2>
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <p className="team-description">{artisticTeam.description}</p>

                                <div className="team-stats">
                                    {artisticTeam.stats.map((stat) => (
                                        <div key={stat.label} className="stat-box">
                                            <span className="stat-value">{stat.value}</span>
                                            <span className="stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="team-pricing glass">
                                <h3>Team Pricing</h3>
                                <div className="pricing-list">
                                    {artisticTeam.pricing.map((item) => (
                                        <div key={item.level} className="pricing-row">
                                            <span className="level-name">{item.level}</span>
                                            <span className="level-price">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="pricing-note">{artisticTeam.note}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tryout Info */}
            <section className="tryout-section">
                <div className="container">
                    <div className="tryout-card glass-gold reveal">
                        <div className="tryout-content">
                            <h3>Interested in Joining?</h3>
                            <p>
                                Competition team placement is by invitation or tryout only,
                                based on skill level and/or previous experience. Contact us
                                to inquire about team placement or schedule an evaluation.
                            </p>
                        </div>
                        <div className="tryout-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Inquire Within
                            </Link>
                            <Link to="/successes" className="btn btn-secondary btn-lg">
                                View Our Successes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TeamsPage;
