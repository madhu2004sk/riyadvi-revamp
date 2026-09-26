import Section from "../components/Section";
import Heading from "../components/Heading";
export default function DigitalTransformation() {
    return (
        <Section className="border-t border-white/10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <Heading
                    eyebrow="Digital Transformation"
                    title="Turn technology into measurable business value."
                    description="From product engineering to immersive experiences, we help
organizations modernize their digital presence and create scalable technology solutions."
                />
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
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
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
    );
}