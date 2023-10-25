'use client';
import React from 'react';
import styles from '../app/page.module.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link
                className={styles.link}
                to="about-section"
                id="link"
                spy={true}
                smooth={true}
                offset={0}
                duration={900}
                activeClass="active"
            >
                About
            </Link>
            <Link
                className={styles.link}
                to="team-section"
                id="link"
                spy={true}
                smooth={true}
                offset={1}
                duration={900}
                activeClass="active"
            >
                Team
            </Link>
            <Link
                className={styles.link}
                to="projects-section"
                id="link"
                spy={true}
                smooth={true}
                offset={2}
                duration={900}
                activeClass="act"
            >
                projects
            </Link>
            <Link
                className={styles.link}
                to="contact-section"
                id="link"
                spy={true}
                smooth={true}
                offset={1}
                duration={900}
                activeClass="active"
            >
                Contact
            </Link>
        </nav>
    );
};

export default Navbar;
