import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import jobs from "../data/jobs";
export default function JobDetails() {
    const { slug } = useParams();
    const job = jobs.find(
        (item) => item.slug === slug
    );
    const [submitted, setSubmitted] = useState(false);
    if (!job) {
        return (
            <main className="min-h-screen bg-[#050505] pt-32">
                <Section>
                    <h1 className="text-4xl font-bold">
                        Position Not Found
                    </h1>
                </Section>
            </main>
        );
    }
    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }
    return (
        <main className="bg-[#050505] pt-28">
            <Section>
                <Link
                    to="/careers"
                    className="text-sm text-gray-500 hover:text-[#d4af37]"
                >
                    ← All Careers
                </Link>
                <div className="mt-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                        {job.department}
                    </p>
                    <h1 className="mt-4 text-5xl font-bold">
                        {job.designation}
                    </h1>
                    <p className="mt-4 text-gray-400">
                        {job.experience}
                    </p>
                </div>
                <div className="mt-14 grid gap-14 lg:grid-cols-2">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold">
                                Description
                            </h2>
                            <p className="mt-4 leading-7 text-gray-400">
                                {job.description}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                Responsibilities
                            </h2>
                            <ul className="mt-4 space-y-3 text-gray-400">
                                {job.responsibilities.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                Requirements
                            </h2>
                            <ul className="mt-4 space-y-3 text-gray-400">
                                {job.requirements.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 p-7">
                        <h2 className="text-2xl font-bold">
                            Apply for this position
                        </h2>
                        {submitted ? (
                            <div className="mt-8 rounded-xl border border-[#d4af37]/30 p-6">
                                <p className="text-[#d4af37]">
                                    Application form submitted successfully.
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Backend application storage will be connected on Day 3.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="mt-7 space-y-4"
                            >
                                <input
                                    required
                                    placeholder="Full Name"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <input
                                    required
                                    placeholder="Phone"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <textarea
                                    rows="5"
                                    placeholder="Tell us about yourself"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-[#d4af37] px-6 py-4 font-semibold text-black"
                                >
                                    Submit Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </main>
    );
}