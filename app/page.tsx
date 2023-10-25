'use client';
import { gsap } from 'gsap';
import styles from './page.module.scss';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useLayoutEffect, useRef, MutableRefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const component = useRef() as MutableRefObject<HTMLDivElement>;
    const slider = useRef() as MutableRefObject<HTMLDivElement>;

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let cols = gsap.utils.toArray('#projects__col');

            let pauseRatio = 0.001;
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (cols.length - 1),
                    end: () => '+=' + slider.current.offsetWidth,
                },
            });
            tl.to(
                cols,
                {
                    xPercent: -100 * (cols.length - 1),
                    duration: 1,
                    ease: 'none',
                },
                pauseRatio,
            );
            tl.to({}, { duration: pauseRatio });
        }, component);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <main id="smooth-wrapper">
            <div ref={component} id="smooth-content">
                <section className={styles.about} id="about-section">
                    <div className={styles.content}>about</div>
                </section>
                <section className={styles.team} id="team-section">
                    <div className={styles.content}>team</div>
                </section>
                <section className={styles.projects} ref={slider}>
                    <div className={styles.projects__col} id="projects__col">
                        <span id="projects-section"></span>
                        <div className={styles.content}>projects 1</div>
                    </div>
                    <div className={styles.projects__col} id="projects__col">
                        <div className={styles.content}>projects 2</div>
                    </div>
                    <div className={styles.projects__col} id="projects__col">
                        <div className={styles.content}>projects 3</div>
                    </div>
                </section>
                <section className={styles.contact} id="contact-section">
                    <div className={styles.content}>contact</div>
                </section>
            </div>
        </main>
    );
}
