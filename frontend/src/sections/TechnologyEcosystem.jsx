import Section from "../components/Section.jsx";
import Heading from "../components/Heading.jsx";
const technologies = [
    "Frontend",
    "Backend",
    "Cloud",
    "AI / ML",
    "3D / XR",
    "Databases",
];
export default function TechnologyEcosystem() {
    return (
        <Section className="bg-[#080808]">
            <Heading
                eyebrow="Technology Ecosystem"
                title="A modern technology ecosystem."
                description="We select technologies based on the needs of the product, users and
business."
                center
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {technologies.map((technology) => (
                    <div
                        key={technology}
                        className="rounded-2xl border border-white/10 p-8 text-center"
                    >
                        <h3 className="text-lg font-semibold">
                            {technology}
                        </h3>
                        <div className="mx-auto mt-5 h-px w-16 bg-[#d4af37]" />
                    </div>
                ))}
            </div>
        </Section>
    );
}