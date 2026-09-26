import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
const articles = [
    {
        category: "Technology",
        title: "Building Digital Products for a Changing World",
    },
    {
        category: "AI",
        title: "How AI Is Transforming Business Workflows",
    },
    {
        category: "Design",
        title: "Why User Experience Matters for Digital Growth",
    },
];
export default function BlogPreview() {
    return (
        <Section className="border-t border-white/10">
            <Heading
                eyebrow="Insights"
                title="Ideas, technology and digital transformation."
                description="Explore insights from our technology and creative ecosystem."
            />
            <div className="grid gap-5 md:grid-cols-3">
                {articles.map((article) => (
                    <article
                        key={article.title}
                        className="rounded-2xl border border-white/10 p-6"
                    >
                        <p className="text-xs uppercase tracking-widest text-[#d4af37]">
                            {article.category}
                        </p>
                        <h3 className="mt-5 text-xl font-semibold leading-7">
                            {article.title}
                        </h3>
                        <a
                            href="/blog"
                            className="mt-6 inline-block text-sm text-gray-400 hover:text-[#d4af37]"
                        >
                            Read article →
                        </a>
                    </article>
                ))}
            </div>
            <div className="mt-10">
                <Button to="/blog" variant="secondary">
                    View All Insights
                </Button>
            </div>
        </Section>
    );
}