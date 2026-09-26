import Section from "../components/Section";
export default function Placeholder({ title }) {
    return (
        <div className="min-h-screen bg-[#050505] pt-32">
            <Section>
                <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                    Riyadvi
                </p>
                <h1 className="mt-4 text-5xl font-bold">
                    {title}
                </h1>
                <p className="mt-5 text-gray-400">
                    This page will be completed during Day 2.
                </p>
            </Section>
        </div>
    );
}