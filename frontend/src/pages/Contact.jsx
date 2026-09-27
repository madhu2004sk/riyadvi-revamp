import { useState } from "react";

import Section from "../components/Section";
import Heading from "../components/Heading";
import api from "../services/api";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Web Development",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");
        try {
            const response = await api.post("/contact", form);
            setSuccess(response.data.message);

            setForm({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "Web Development",
                message: "",
            });
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="bg-[#050505] pt-28">
            <Section>
                <Heading
                    eyebrow="Contact"
                    title="Let's build something meaningful."
                    description="Tell us about your business, project or technology challenge."
                />
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Start a conversation
                        </h2>
                        <p className="mt-4 leading-7 text-gray-400">
                            Whether you are starting a new digital product or
                            transforming an existing business, we'd like to hear
                            about your goals.
                        </p>
                        <div className="mt-8 space-y-4 text-sm text-gray-400">
                            <p>Email: hello@riyadvi.com</p>
                            <p>Phone: +91 XXXXX XXXXX</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 p-7">
                        {success ? (
                            <div className="py-10 text-center">
                                <div className="text-3xl text-[#d4af37]">
                                    ✓
                                </div>
                                <h2 className="mt-4 text-2xl font-bold">
                                    Thank you.
                                </h2>
                                <p className="mt-3 text-gray-400">
                                    {success}
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSuccess("");
                                        setError("");
                                    }}
                                    className="mt-6 rounded-xl border border-white/10 px-6 py-3 text-sm hover:border-[#d4af37]"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <input
                                    required
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none focus:border-[#d4af37]"
                                />
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none focus:border-[#d4af37]"
                                />
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none focus:border-[#d4af37]"
                                />
                                <input
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="Company"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none focus:border-[#d4af37]"
                                />
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-5 py-4 text-gray-300 outline-none focus:border-[#d4af37]"
                                >
                                    <option>Web Development</option>
                                    <option>App Development</option>
                                    <option>Digital Marketing</option>
                                    <option>AR / VR</option>
                                    <option>3D Modeling</option>
                                    <option>UI / UX Design</option>
                                </select>
                                <textarea
                                    required
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Message"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none focus:border-[#d4af37]"
                                />
                                {error && (
                                    <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                                        {error}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-[#d4af37] px-6 py-4 font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </main>
    );
}