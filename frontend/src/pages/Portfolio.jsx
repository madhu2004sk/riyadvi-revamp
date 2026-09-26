import { Link } from "react-router-dom";
import Section from "../components/Section";
import Heading from "../components/Heading";
import projects from "../data/projects";
export default function Portfolio() {
    return (
        <main className="bg-[#050505] pt-28">
            <Section>
                <Heading
                    eyebrow="Portfolio"
                    title="Digital products built around real business challenges."
                    description="Explore selected examples of technology, design and digital
transformation."
                    center
                />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            to={`/portfolio/${project.slug}`}
                            className="group overflow-hidden rounded-3xl border border-white/10
bg-white/[0.03]"
                        >
                            <div className="aspect-[4/3] bg-gradient-to-br from-[#181818] to-[#080808] p-7">
                                <p className="text-xs uppercase tracking-widest text-[#d4af37]">
                                    {project.industry}
                                </p>
                                <h2 className="mt-5 text-2xl font-semibold">
                                    {project.title}
                                </h2>
                            </div>
                            <div className="p-6">
                                <p className="text-sm leading-6 text-gray-400">
                                    {project.challenge}
                                </p>
                                <p className="mt-5 text-sm text-gray-500 group-hover:text-[#d4af37]">
                                    View case study →
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    );
}