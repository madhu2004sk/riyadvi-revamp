import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import jobs from "../data/jobs";
import api from "../services/api";
export default function JobDetails() {
    const { slug } = useParams();
    const job = jobs.find(
        (item) => item.slug === slug
    );
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
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
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }
    async function handleApplication(event) {
        event.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");
        try {
            const response = await api.post("/applications", {
                name: form.name,
                email: form.email,
                phone: form.phone,
                position: job.designation,
                experience: job.experience,
                skills: job.requirements.join(", "),
                resume: "",
                coverLetter: form.coverLetter,
            });
            setSuccess(response.data.message);
            setSubmitted(true);
            setForm({
                name: "",
                email: "",
                phone: "",
                coverLetter: "",
            });
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Application submission failed."
            );
        } finally {
            setLoading(false);
        }
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
                                <div className="text-3xl text-[#d4af37]">
                                    ✓
                                </div>
                                <p className="mt-4 text-[#d4af37]">
                                    {success ||
                                        "Application submitted successfully."}
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Thank you for applying. We will review your
                                    application and get back to you.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleApplication}
                                className="mt-7 space-y-4"
                            >
                                <input
                                    required
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <input
                                    required
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <textarea
                                    required
                                    name="coverLetter"
                                    value={form.coverLetter}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell us about yourself"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                {error && (
                                    <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm
text-red-400">
                                        {error}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-[#d4af37] px-6 py-4 font-semibold text-black
disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {loading
                                        ? "Submitting..."
                                        : "Submit Application"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </main>
    );
}