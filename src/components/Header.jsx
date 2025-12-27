import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', href: '/', isRoute: true },
        {
            name: 'About',
            href: '/about',
            isRoute: true,
            submenu: [
                { name: 'Our Philosophy', href: '/about', isRoute: true },
                { name: 'Our Coaches', href: '/coaches', isRoute: true },
                { name: 'Competition Teams', href: '/teams', isRoute: true },
                { name: 'Our Successes', href: '/successes', isRoute: true },
            ]
        },
        {
            name: 'Classes',
            href: '/#classes',
            isRoute: false,
            submenu: [
                { name: 'Class Overview', href: '/#classes', isRoute: false },
                { name: 'Private Lessons', href: '/contact', isRoute: true },
            ]
        },
        { name: 'Pricing', href: '/pricing', isRoute: true },
        { name: 'Contact', href: '/contact', isRoute: true },
    ];

    const renderNavLink = (link, className) => {
        if (link.isRoute) {
            return (
                <Link to={link.href} className={className}>
                    {link.name}
                    {link.submenu && (
                        <svg className="nav-chevron" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    )}
                </Link>
            );
        }
        return (
            <a href={link.href} className={className}>
                {link.name}
                {link.submenu && (
                    <svg className="nav-chevron" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                )}
            </a>
        );
    };

    const renderSubmenuLink = (sublink) => {
        if (sublink.isRoute) {
            return <Link to={sublink.href} className="submenu-link">{sublink.name}</Link>;
        }
        return <a href={sublink.href} className="submenu-link">{sublink.name}</a>;
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <div className="logo-icon">
                        <img src="/logo.png" alt="Crescent City Gymnastics Logo" />
                    </div>
                    <div className="logo-text">
                        <span className="logo-name">Crescent City</span>
                        <span className="logo-tagline">Gymnastics</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name} className={`nav-item ${link.submenu ? 'has-submenu' : ''}`}>
                                {renderNavLink(link, 'nav-link')}
                                {link.submenu && (
                                    <ul className="submenu">
                                        {link.submenu.map((sublink) => (
                                            <li key={sublink.name}>
                                                {renderSubmenuLink(sublink)}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Button */}
                <Link to="/contact" className="header-cta btn btn-primary">
                    Register Now
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name} className="mobile-nav-item">
                            {link.isRoute ? (
                                <Link
                                    to={link.href}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    href={link.href}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            )}
                            {link.submenu && (
                                <ul className="mobile-submenu">
                                    {link.submenu.map((sublink) => (
                                        <li key={sublink.name}>
                                            {sublink.isRoute ? (
                                                <Link
                                                    to={sublink.href}
                                                    className="mobile-submenu-link"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sublink.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={sublink.href}
                                                    className="mobile-submenu-link"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sublink.name}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <Link
                    to="/contact"
                    className="btn btn-primary mobile-cta"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Register Now
                </Link>
            </div>
        </header>
    );
}

export default Header;
