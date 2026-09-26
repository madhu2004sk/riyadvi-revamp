import { Link } from "react-router-dom";
import Section from "../components/Section";
import Heading from "../components/Heading";
import jobs from "../data/jobs";
export default function Careers() {
    return (
        <main className="bg-[#050505] pt-28">
            <Section>
                <Heading
                    eyebrow="Careers"
                    title="Build the future with us."
                    description="Explore opportunities to work across software, design, digital
transformation and emerging technologies."
                    center
                />
                <div className="space-y-4">
                    {jobs.map((job) => (
                        <Link
                            key={job.slug}
                            to={`/careers/${job.slug}`}
                            className="group block rounded-2xl border border-white/10 p-7
hover:border-[#d4af37]/50"
                        >
                            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#d4af37]">
                                        {job.department}
                                    </p>
                                    <h2 className="mt-2 text-2xl font-semibold">
                                        {job.designation}
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {job.experience}
                                    </p>
                                </div>
                                <span className="text-sm text-gray-500 group-hover:text-[#d4af37]">
                                    View position →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    );
}