import Section from "../components/Section";
import Heading from "../components/Heading";
const milestones = [
    {
        year: "01",
        title: "Understanding",
        text: "We begin by understanding the business, users and technology challenge.",
    },
    {
        year: "02",
        title: "Strategy",
        text: "We translate business objectives into a clear digital direction.",
    },
    {
        year: "03",
        title: "Design",
        text: "We create experiences focused on usability, clarity and impact.",
    },
    {
        year: "04",
        title: "Engineering",
        text: "We build scalable digital solutions using modern technologies.",
    },
    {
        year: "05",
        title: "Growth",
        text: "We continuously improve the product based on business and user needs.",
    },
];
export default function About() {
    return (
        <main className="bg-[#050505] pt-18">
            <Section>
                <Heading
                    eyebrow="About Riyadvi"
                    title="Technology, creativity and business thinking."
                    description="Riyadvi Software Technologies focuses on creating digital solutions that
help organizations modernize, innovate and grow."
                />
                <div className="grid gap-5 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 p-7">
                        <h3 className="text-xl font-semibold">Vision</h3>
                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            Create meaningful digital experiences through technology and innovation.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 p-7">
                        <h3 className="text-xl font-semibold">Mission</h3>
                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            Help businesses solve technology challenges with practical digital solutions.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 p-7">
                        <h3 className="text-xl font-semibold">Values</h3>
                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            Innovation, collaboration, quality, transparency and continuous improvement.
                        </p>
                    </div>
                </div>
            </Section>
            <Section className="border-t border-white/10">
                <Heading
                    eyebrow="Our Approach"
                    title="From challenge to digital solution."
                />
                <div className="space-y-5">
                    {milestones.map((item) => (
                        <div
                            key={item.year}
                            className="grid gap-4 rounded-2xl border border-white/10 p-6
md:grid-cols-[100px_220px_1fr] md:items-center"
                        >
                            <span className="text-[#d4af37]">
                                {item.year}
                            </span>
                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-sm leading-7 text-gray-400">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>
            <Section className="border-t border-white/10">
                <Heading
                    eyebrow="Recognition"
                    title="Milestones and recognition."
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        "Digital Innovation",
                        "Technology Excellence",
                        "Creative Solutions",
                        "Business Growth",
                    ].map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-white/10 p-6 text-center"
                        >
                            <div className="text-2xl text-[#d4af37]">
                                ★
                            </div>
                            <p className="mt-4 text-sm text-gray-300">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}