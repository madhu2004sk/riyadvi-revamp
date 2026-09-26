import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section from "../components/Section";
import Heading from "../components/Heading";
import ScrollScene from "../components/ScrollScene";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalTransformation() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {

            gsap.from(".transformation-content", {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(".transformation-card", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);

        return () => context.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden border-t border-white/10"
        >

            <div className="absolute inset-y-0 right-0 w-1/2 opacity-70">
                <ScrollScene />
            </div>

            <Section>

                <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">

                    <div className="transformation-content">

                        <Heading
                            eyebrow="Digital Transformation"
                            title="Turn technology into measurable business value."
                            description="We combine modern engineering, design and emerging technologies to create digital solutions built around real business needs."
                        />

                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                    
                        {[
                            {
                                title: "Strategy",
                                text: "Technology direction aligned with business objectives.",
                            },
                            {
                                title: "Engineering",
                                text: "Scalable and maintainable software solutions.",
                            },
                            {
                                title: "Experience",
                                text: "User-focused interfaces and digital journeys.",
                            },
                            {
                                title: "Innovation",
                                text: "Emerging technologies turned into practical solutions.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="transformation-card rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-md"
                            >
                    
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>
                         
                                <p className="mt-3 text-sm leading-6 text-gray-400">
                                    {item.text}
                                </p>
                         
                            </div>
                        ))}
                    
                    </div>
                
                </div>
            
            </Section>
        
        </section>
    );
}