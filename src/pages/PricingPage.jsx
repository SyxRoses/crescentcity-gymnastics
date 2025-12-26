import { useEffect } from 'react';
import './PricingPage.css';

function PricingPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);

        // Reveal animation on scroll
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

    const monthlyPricing = [
        {
            name: 'Pre-K',
            description: 'Ages 2.5 - 5 years',
            prices: [
                { frequency: '1x/week', price: '$70' },
                { frequency: '2x/week', price: '$125' },
                { frequency: '3x/week', price: '$165' },
            ],
            featured: false,
        },
        {
            name: 'Tumble with Me',
            description: 'Ages 1.5 - 2.5 years (Parent participation)',
            prices: [
                { frequency: '1x/week', price: '$75' },
                { frequency: '2x/week', price: '$135' },
            ],
            featured: false,
        },
        {
            name: 'Basic & Tumbling',
            description: 'Ages 6+ (All skill levels welcome)',
            prices: [
                { frequency: '1x/week', price: '$80' },
                { frequency: '2x/week', price: '$140' },
                { frequency: '3x/week', price: '$195' },
            ],
            featured: true,
        },
    ];

    const specialtyClasses = [
        {
            name: 'KinderGym',
            description: 'Ages 5-6 • Wednesdays at 6pm',
            price: '$80/month',
        },
        {
            name: 'Hot Shots',
            description: 'Ages 4-6 • Tue & Thu at 5pm',
            price: '$140/month',
        },
        {
            name: 'Intermediate',
            description: 'By evaluation • Wed & Fri at 5pm',
            price: '$140/month',
        },
        {
            name: 'Acro Fundamentals',
            description: 'Ages 6+ • Friday at 4pm',
            price: '$80/month',
        },
    ];

    const competitionTeams = [
        {
            team: 'Acrobatic Gymnastics',
            levels: [
                { name: 'Pre-Team', price: '$100/month' },
                { name: 'Competition Team', price: 'Starting at $195/month' },
            ],
            note: 'Prices increase with level',
        },
        {
            team: 'Artistic Gymnastics',
            levels: [
                { name: 'Hot Shots', price: '$140/month' },
                { name: 'Pre-Team', price: '$175/month' },
                { name: 'Competition Team', price: 'Starting at $185/month' },
            ],
            note: 'Prices increase with level',
        },
    ];

    const privateLessons = [
        { athletes: '1 Athlete', halfHour: 'Starting at $35', fullHour: 'Starting at $65' },
        { athletes: '2 Athletes', halfHour: 'Starting at $65', fullHour: 'Starting at $75' },
    ];

    const discounts = [
        { icon: '👨‍👩‍👧‍👦', title: 'Sibling Discount', description: '$5 off per additional child' },
        { icon: '📅', title: '3 Months Prepaid', description: '$10 off total' },
        { icon: '🎖️', title: 'First Responder & Military', description: '$10 off (NOPD/Military/Fire)' },
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="pricing-hero">
                <div className="pricing-hero-bg"></div>
                <div className="pricing-hero-content">
                    <p className="pricing-subtitle animate-slide-up">Investment in Excellence</p>
                    <h1 className="pricing-title animate-slide-up stagger-1">
                        Class <span className="text-gold">Pricing</span>
                    </h1>
                    <p className="pricing-description animate-slide-up stagger-2">
                        Flexible options designed to fit your family's schedule and budget.
                        Quality training at competitive rates.
                    </p>
                </div>
            </section>

            {/* Monthly Tuition */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">Recreational Classes</p>
                        <h2>Monthly <span>Tuition</span></h2>
                        <p className="section-header-description">
                            Due by the 1st class of the month. Rolling enrollment available.
                        </p>
                    </div>

                    <div className="pricing-grid">
                        {monthlyPricing.map((item, index) => (
                            <div
                                key={item.name}
                                className={`pricing-card luxury-card hover-lift reveal stagger-${index + 1} ${item.featured ? 'luxury-card-featured' : ''}`}
                            >
                                {item.featured && <span className="featured-badge">Most Popular</span>}
                                <h3 className="pricing-card-title">{item.name}</h3>
                                <p className="pricing-card-description">{item.description}</p>
                                <div className="pricing-card-prices">
                                    {item.prices.map((price) => (
                                        <div key={price.frequency} className="price-row">
                                            <span className="price-frequency">{price.frequency}</span>
                                            <span className="price-value">{price.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialty Classes */}
            <section className="pricing-section pricing-section-alt">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">Advanced Programs</p>
                        <h2>Specialty <span>Classes</span></h2>
                        <p className="section-header-description">
                            Focused training for athletes ready to advance their skills.
                        </p>
                    </div>

                    <div className="specialty-grid">
                        {specialtyClasses.map((item, index) => (
                            <div
                                key={item.name}
                                className={`specialty-card glass hover-glow reveal stagger-${index + 1}`}
                            >
                                <div className="specialty-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <span className="specialty-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competition Teams */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">Elite Training</p>
                        <h2>Competition <span>Teams</span></h2>
                        <p className="section-header-description">
                            By invitation or tryout only. Pricing based on training hours and level.
                        </p>
                    </div>

                    <div className="teams-grid">
                        {competitionTeams.map((team, index) => (
                            <div
                                key={team.team}
                                className={`team-card luxury-card hover-lift reveal stagger-${index + 1}`}
                            >
                                <div className="team-icon">
                                    {team.team === 'Acrobatic Gymnastics' ? '🤸‍♀️' : '⭐'}
                                </div>
                                <h3>{team.team}</h3>
                                <div className="team-levels">
                                    {team.levels.map((level) => (
                                        <div key={level.name} className="team-level">
                                            <span className="level-name">{level.name}</span>
                                            <span className="level-price">{level.price}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="team-note">{team.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Private Lessons */}
            <section className="pricing-section pricing-section-alt">
                <div className="container">
                    <div className="section-header reveal">
                        <p className="section-header-subtitle">One-on-One Training</p>
                        <h2>Private <span>Lessons</span></h2>
                        <p className="section-header-description">
                            Personalized coaching for athletes ages 5 and up.
                        </p>
                    </div>

                    <div className="private-lessons-card glass-gold reveal">
                        <div className="lessons-table">
                            <div className="lessons-header">
                                <span></span>
                                <span>Half Hour</span>
                                <span>Full Hour</span>
                            </div>
                            {privateLessons.map((lesson) => (
                                <div key={lesson.athletes} className="lessons-row">
                                    <span className="lessons-athletes">{lesson.athletes}</span>
                                    <span className="lessons-price">{lesson.halfHour}</span>
                                    <span className="lessons-price">{lesson.fullHour}</span>
                                </div>
                            ))}
                        </div>
                        <p className="lessons-note">Schedule arranged directly with coach</p>
                    </div>
                </div>
            </section>

            {/* Registration & Discounts */}
            <section className="pricing-section">
                <div className="container">
                    <div className="pricing-footer-grid">
                        {/* Registration Fee */}
                        <div className="registration-card luxury-card reveal">
                            <div className="registration-icon">📋</div>
                            <h3>Registration Fee</h3>
                            <div className="registration-price">$50</div>
                            <p>Annual fee per athlete</p>
                        </div>

                        {/* Discounts */}
                        <div className="discounts-card reveal stagger-1">
                            <h3>Available <span className="text-gold">Discounts</span></h3>
                            <div className="discounts-list">
                                {discounts.map((discount) => (
                                    <div key={discount.title} className="discount-item hover-scale">
                                        <span className="discount-icon">{discount.icon}</span>
                                        <div className="discount-info">
                                            <strong>{discount.title}</strong>
                                            <span>{discount.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trial Class CTA */}
                    <div className="trial-cta glass-gold reveal">
                        <div className="trial-content">
                            <h3>Not sure which class is right?</h3>
                            <p>Try a class for only <strong className="text-gold">$15</strong> before you commit!</p>
                        </div>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Book a Trial Class
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PricingPage;
