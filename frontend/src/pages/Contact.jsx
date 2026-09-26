import { useState } from "react";
import Section from "../components/Section";
import Heading from "../components/Heading";
export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
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
                        {submitted ? (
                            <div className="py-10 text-center">
                                <div className="text-3xl text-[#d4af37]">
                                    ✓
                                </div>
                                <h2 className="mt-4 text-2xl font-bold">
                                    Thank you.
                                </h2>
                                <p className="mt-3 text-gray-400">
                                    Your message has been submitted.
                                </p>
                                <p className="mt-2 text-xs text-gray-500">
                                    Backend submission will be connected on Day 3.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <input
                                    required
                                    placeholder="Name"
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
                                    placeholder="Phone"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <input
                                    placeholder="Company"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <select
                                    className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-5 py-4
text-gray-300 outline-none focus:border-[#d4af37]"
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
                                    rows="6"
                                    placeholder="Message"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4
outline-none focus:border-[#d4af37]"
                                />
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-[#d4af37] px-6 py-4 font-semibold text-black"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </main>
    );
}