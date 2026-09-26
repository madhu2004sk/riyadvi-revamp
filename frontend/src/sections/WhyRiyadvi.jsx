import Section from "../components/Section";
import Heading from "../components/Heading";
const reasons = [
    "Business-first thinking",
    "Modern technology",
    "Creative problem solving",
    "Scalable engineering",
    "User-centered experiences",
    "Long-term technology partnership",
];
export default function WhyRiyadvi() {
    return (
        <Section>
            <Heading
                eyebrow="Why Riyadvi"
                title="Technology with purpose."
                description="We focus on creating solutions that connect technology, design and
business objectives."
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {reasons.map((reason, index) => (
                    <div
                        key={reason}
                        className="flex items-center gap-4 rounded-xl border border-white/10 p-5"
                    >
                        <span className="text-sm text-[#d4af37]">
                            0{index + 1}
                        </span>
                        <span className="text-sm text-gray-300">
                            {reason}
                        </span>
                    </div>
                ))}
            </div>
        </Section>
    );
}