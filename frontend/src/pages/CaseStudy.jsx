import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import projects from "../data/projects";
export default function CaseStudy() {
    const { slug } = useParams();
    const project = projects.find(
        (item) => item.slug === slug
    );
    if (!project) {
        return (
            <main className="min-h-screen bg-[#050505] pt-32">
                <Section>
                    <h1 className="text-4xl font-bold">
                        Case Study Not Found
                    </h1>
                </Section>
            </main>
        );
    }
    return (
        <main className="bg-[#050505] pt-28">
            <Section>
                <Link
                    to="/portfolio"
                    className="text-sm text-gray-500 hover:text-[#d4af37]"
                >
                    ← Back to Portfolio
                </Link>
                <p className="mt-12 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                    {project.industry}
                </p>
                <h1 className="mt-5 text-5xl font-bold sm:text-7xl">
                    {project.title}
                </h1>
                <div className="mt-14 grid gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Client
                        </h2>
                        <p className="mt-3 text-gray-400">
                            {project.client}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Challenge
                        </h2>
                        <p className="mt-3 leading-7 text-gray-400">
                            {project.challenge}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Solution
                        </h2>
                        <p className="mt-3 leading-7 text-gray-400">
                            {project.solution}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Results
                        </h2>
                        <ul className="mt-3 space-y-3">
                            {project.results.map((result) => (
                                <li
                                    key={result}
                                    className="text-gray-400"
                                >
                                    ✓ {result}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-10">
                    <h2 className="text-2xl font-bold">
                        Technologies
                    </h2>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-white/10 px-5 py-2 text-sm text-gray-400"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}