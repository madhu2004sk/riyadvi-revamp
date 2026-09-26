import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
const services = [
    {
        number: "01",
        title: "Web Development",
        description: "Modern, scalable websites and web applications.",
    },
    {
        number: "02",
        title: "App Development",
        description: "Mobile experiences designed around real users.",
    },
    {
        number: "03",
        title: "Digital Marketing",
        description: "Digital strategies that connect brands with audiences.",
    },
    {
        number: "04",
        title: "AR / VR",
        description: "Immersive experiences powered by emerging technology.",
    },
    {
        number: "05",
        title: "3D Modeling",
        description: "High-quality 3D assets and interactive experiences.",
    },
    {
        number: "06",
        title: "UI / UX Design",
        description: "Purposeful interfaces built for clarity and conversion.",
    },
];
export default function ServicesPreview() {
    return (
        <Section className="border-t border-white/10">
            <Heading
                eyebrow="Our Services"
                title="Digital solutions built around your goals."
                description="Explore our core technology and creative capabilities."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.number}
                        className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition
duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50"
                    >
                        <span className="text-sm text-[#d4af37]">
                            {service.number}
                        </span>
                        <h3 className="mt-8 text-xl font-semibold">
                            {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            {service.description}
                        </p>
                        <div className="mt-7 text-sm text-gray-500 transition group-hover:text-[#d4af37]">
                            Explore →
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <Button to="/services" variant="secondary">
                    View All Services
                </Button>
            </div>
        </Section>
    );
}