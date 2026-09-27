import { useState } from "react";
import Section from "../components/Section";
import api from "../services/api";
export default function LeadMagnet() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const handleLeadSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setSuccess("");
            setError("");
            const response = await api.post("/lead-magnet", {
                name,
                email,
                company,
                resource: "Digital Transformation Guide",
                source: "homepage",
            });
            setSuccess(response.data.message);
            setName("");
            setEmail("");
            setCompany("");
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Unable to submit request."
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <main>
            <Section>
                <div className="overflow-hidden rounded-3xl border border-[#d4af37]/20
bg-white/[0.03]">
                    <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:p-14">
                        {/* Left Content */}
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                                Free Resource
                            </p>
                            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                                Get the Digital Transformation Guide
                            </h2>
                            <p className="mt-6 max-w-xl leading-7 text-gray-400">
                                Discover practical strategies, technology
                                opportunities and digital transformation ideas
                                that can help your business grow.
                            </p>
                            <div className="mt-8 space-y-4 text-sm text-gray-300">
                                <div className="flex gap-3">
                                    <span className="text-[#d4af37]">✓</span>
                                    <span>Digital transformation strategies</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#d4af37]">✓</span>
                                    <span>Technology planning insights</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#d4af37]">✓</span>
                                    <span>Business growth opportunities</span>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-8">
                            <h3 className="text-2xl font-semibold">
                                Download the Guide
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                Enter your details and we'll send you the
                                Digital Transformation Guide.
                            </p>
                            <form
                                onSubmit={handleLeadSubmit}
                                className="mt-7 space-y-4"
                            >
                                <input
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
text-white outline-none transition focus:border-[#d4af37]"
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
text-white outline-none transition focus:border-[#d4af37]"
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
text-white outline-none transition focus:border-[#d4af37]"
                                />
                                {error && (
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4
text-sm text-red-400">
                                        {error}
                                    </div>
                                )}
                                {success && (
                                    <div className="rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/10 p-4
text-sm text-[#d4af37]">
                                        {success}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-[#d4af37] px-6 py-4 font-semibold text-black
transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {loading
                                        ? "Submitting..."
                                        : "Get the Guide"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}