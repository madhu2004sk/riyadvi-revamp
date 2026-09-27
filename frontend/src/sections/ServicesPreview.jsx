import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section from "../components/Section.jsx";
import Heading from "../components/Heading.jsx";
import services from "../data/services.js";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPreview() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            const cards = gsap.utils.toArray(".service-card");

            if (!cards.length) {
                return;
            }

            // Keep cards visible initially.
            // The animation will control them when the section enters the viewport.
            gsap.set(cards, {
                opacity: 1,
                y: 0,
                scale: 1,
            });

            const animation = gsap.fromTo(
                cards,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    paused: true,
                }
            );

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,

                onEnter: () => {
                    animation.play();
                },
            });
        }, sectionRef);

        // Recalculate ScrollTrigger positions after the page is rendered.
        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(refreshTimer);
            context.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="border-t border-white/10"
        >
            <Section>
                <Heading
                    eyebrow="Our Services"
                    title="Digital solutions built around your goals."
                    description="Explore our core technology and creative capabilities."
                />

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="service-card group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50"
                        >
                            <span className="text-sm text-[#d4af37]">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3 className="mt-8 text-xl font-semibold">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                {service.shortDescription}
                            </p>

                            <div className="mt-7 text-sm text-gray-500 group-hover:text-[#d4af37]">
                                Explore →
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </section>
    );
}