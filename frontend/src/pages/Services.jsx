import { Link } from "react-router-dom";
import Section from "../components/Section";
import Heading from "../components/Heading";
import services from "../data/services";
export default function Services() {
    return (
        <main className="bg-[#050505] pt-28">
            <Section>
                <Heading
                    eyebrow="Our Services"
                    title="Technology and creative services built around your goals."
                    description="Explore our capabilities across software, design, digital transformation
and immersive technology."
                    center
                />
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7
transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50"
                        >
                            <span className="text-sm text-[#d4af37]">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h2 className="mt-8 text-2xl font-semibold">
                                {service.title}
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-gray-400">
                                {service.shortDescription}
                            </p>
                            <div className="mt-8 text-sm text-gray-500 group-hover:text-[#d4af37]">
                                Explore service →
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    );
}