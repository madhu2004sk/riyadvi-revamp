import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";
import services from "../data/services";
export default function ServiceDetails() {
    const { slug } = useParams();
    const service = services.find(
        (item) => item.slug === slug
    );
    if (!service) {
        return (
            <main className="min-h-screen bg-[#050505] pt-32">
                <Section>
                    <h1 className="text-4xl font-bold">
                        Service Not Found
                    </h1>
                    <Link
                        to="/services"
                        className="mt-6 inline-block text-[#d4af37]"
                    >
                        ← Back to Services
                    </Link>
                </Section>
            </main>
        );
    }
    return (
        <main className="bg-[#050505] pt-28">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#d4af37]/10
blur-3xl" />
                <Section>
                    <div className="relative max-w-4xl">
                        <Link
                            to="/services"
                            className="text-sm text-gray-500 hover:text-[#d4af37]"
                        >
                            ← All Services
                        </Link>
                        <p className="mt-10 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                            Our Service
                        </p>
                        <h1 className="mt-5 text-5xl font-bold sm:text-7xl">
                            {service.title}
                        </h1>
                        <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
                            {service.description}
                        </p>
                        <div className="mt-8">
                            <Button to="/contact">
                                Discuss Your Project
                            </Button>
                        </div>
                    </div>
                </Section>
            </section>
            <Section>
                <div className="grid gap-14 lg:grid-cols-2">
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
                            Capabilities
                        </p>
                        <h2 className="mt-4 text-3xl font-bold">
                            What we can help you build.
                        </h2>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {service.capabilities.map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-white/10 p-5 text-sm text-gray-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            <Section className="border-t border-white/10">
                <h2 className="text-3xl font-bold">
                    Technology
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                    {service.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-[#d4af37]/30 px-5 py-3 text-sm
text-gray-300"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </Section>
        </main>
    );
}