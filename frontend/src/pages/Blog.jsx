import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Heading from "../components/Heading";
import blogPosts from "../data/blogPosts";
export default function Blog() {
    const [search, setSearch] = useState("");
    const filteredPosts = useMemo(() => {
        const value = search.toLowerCase().trim();
        if (!value) return blogPosts;
        return blogPosts.filter((post) =>
            `${post.title} ${post.category} ${post.tags.join(" ")}`
                .toLowerCase()
                .includes(value)
        );
    }, [search]);
    return (
        <main className="bg-[#050505] pt-28">
            <Section>
                <Heading
                    eyebrow="Insights"
                    title="Technology, design and digital transformation."
                    description="Explore ideas from the Riyadvi technology ecosystem."
                    center
                />
                <div className="mx-auto mb-10 max-w-xl">
                    <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search articles..."
                        className="w-full rounded-full border border-white/10 bg-white/[0.03] px-6 py-4
text-white outline-none placeholder:text-gray-600 focus:border-[#d4af37]"
                    />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                    {filteredPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group rounded-3xl border border-white/10 p-7 transition
hover:border-[#d4af37]/50"
                        >
                            <p className="text-xs uppercase tracking-widest text-[#d4af37]">
                                {post.category}
                            </p>
                            <h2 className="mt-5 text-2xl font-semibold">
                                {post.title}
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-gray-400">
                                {post.excerpt}
                            </p>
                            <div className="mt-6 text-sm text-gray-500 group-hover:text-[#d4af37]">
                                Read article →
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    );
}