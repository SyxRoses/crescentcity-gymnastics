import './ClassesShowcase.css';

function ClassesShowcase() {
    const classes = [
        {
            id: 'pre-k',
            name: 'Pre-K / KinderGym',
            ages: 'Ages 2.5 - 6',
            description: 'Jumpstart body awareness and coordination through fun gymnastic movements while developing social and listening skills.',
            price: 'From $70/mo',
            image: '/prek-class.png',
            featured: false,
        },
        {
            id: 'tumble-me',
            name: 'Tumble with Me',
            ages: 'Ages 1.5 - 2.5',
            description: 'A parent-participation class designed to introduce toddlers to basic gymnastics while bonding in a fun, supportive environment.',
            price: 'From $75/mo',
            image: '/tumble-with-me.png',
            featured: false,
        },
        {
            id: 'basic',
            name: 'Basic / Intermediate',
            ages: 'Ages 6+',
            description: 'Develop fundamental skills on all apparatus including trampoline, floor, bar, beam, and vault. All skill levels welcome!',
            price: 'From $80/mo',
            image: '/basic-intermediate.png',
            featured: true,
        },
        {
            id: 'tumbling',
            name: 'Tumbling',
            ages: 'Ages 8+',
            description: 'Focus on floor and trampoline tumbling — cartwheels, round-offs, handsprings, and flips. Perfect for cheerleaders and dancers.',
            price: 'From $80/mo',
            image: '/tumbling-class.png',
            featured: false,
        },
        {
            id: 'hot-shots',
            name: 'Hot Shots',
            ages: 'Ages 4-6',
            description: 'Advanced Pre-K class preparing young athletes for our pre-team or competitive team programs.',
            price: '$140/mo',
            image: '/hot-shots-class.png',
            featured: true,
        },
        {
            id: 'acro',
            name: 'Acro Fundamentals',
            ages: 'Ages 6+',
            description: 'Learn partner stunts, balance, dance, flexibility, and tumbling — preparation for our competitive Acrobatics team.',
            price: '$80/mo',
            image: '/acro-class.png',
            featured: false,
        },
    ];

    return (
        <section className="classes-section section" id="classes">
            <div className="container">
                {/* Section Header - Portfolio Style */}
                <div className="section-header">
                    <div className="section-header-title">
                        <p className="section-header-subtitle">What We Offer</p>
                        <h2>Our <span>Classes</span></h2>
                    </div>
                    <p className="section-header-description">
                        From toddlers taking their first tumble to competitive athletes perfecting
                        their routines, we have a program for every skill level.
                    </p>
                </div>

                {/* Classes Grid - Bento/Portfolio Style */}
                <div className="classes-grid">
                    {classes.map((classItem, index) => (
                        <article
                            key={classItem.id}
                            className={`class-card ${classItem.featured ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="class-card-image">
                                <img src={classItem.image} alt={classItem.name} loading="lazy" />
                                <div className="class-card-overlay">
                                    <span className="class-ages">{classItem.ages}</span>
                                </div>
                            </div>
                            <div className="class-card-content">
                                <div className="class-card-header">
                                    <h3>{classItem.name}</h3>
                                    <span className="class-price">{classItem.price}</span>
                                </div>
                                <p>{classItem.description}</p>
                                <a href={`#${classItem.id}`} className="class-card-link">
                                    Learn More
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="classes-cta">
                    <p>Not sure which class is right for your child?</p>
                    <a href="#contact" className="btn btn-secondary">
                        Contact Us for Guidance
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ClassesShowcase;
