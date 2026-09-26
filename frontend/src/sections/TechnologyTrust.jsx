import Section from "../components/Section";
import Heading from "../components/Heading";
const technologies = [
    "React",
    "Node.js",
    "MongoDB",
    "Three.js",
    "AWS",
    "AI",
];
export default function TechnologyTrust() {
    return (
        <Section>
            <Heading
                eyebrow="Technology"
                title="Technology that moves businesses forward."
                description="We combine modern engineering, design and emerging technologies to
create digital solutions built for real business needs."
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {technologies.map((technology) => (
                    <div
                        key={technology}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center
transition hover:-translate-y-1 hover:border-[#d4af37]/50"
                    >
                        <span className="text-sm font-medium text-gray-300">
                            {technology}
                        </span>
                    </div>
                ))}
            </div>
        </Section>
    );
}