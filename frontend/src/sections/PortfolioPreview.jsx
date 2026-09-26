import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
const projects = [
    {
        title: "Digital Commerce Platform",
        industry: "E-Commerce",
    },
    {
        title: "Immersive Product Experience",
        industry: "Technology",
    },
    {
        title: "Business Transformation Platform",
        industry: "Enterprise",
    },
];
export default function PortfolioPreview() {
    return (
        <Section className="border-t border-white/10">
            <Heading
                eyebrow="Selected Work"
                title="Projects built to create impact."
                description="A preview of the type of digital experiences and technology solutions we
create."
            />
            <div className="grid gap-6 md:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group overflow-hidden rounded-3xl border border-white/10
bg-white/[0.03]"
                    >
                        <div className="flex aspect-[4/3] items-end bg-gradient-to-br from-[#161616]
to-[#090909] p-6">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-[#d4af37]">
                                    {project.industry}
                                </p>
                                <h3 className="mt-2 text-xl font-semibold">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                        <div className="p-5 text-sm text-gray-500 transition group-hover:text-[#d4af37]">
                            View case study →
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <Button to="/portfolio" variant="secondary">
                    View Portfolio
                </Button>
            </div>
        </Section>
    );
}