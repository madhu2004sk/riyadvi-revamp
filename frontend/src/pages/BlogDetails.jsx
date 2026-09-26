import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import blogPosts from "../data/blogPosts";
export default function BlogDetails() {
    const { slug } = useParams();
    const post = blogPosts.find(
        (item) => item.slug === slug
    );
    if (!post) {
        return (
            <main className="min-h-screen bg-[#050505] pt-32">
                <Section>
                    <h1 className="text-4xl font-bold">
                        Article Not Found
                    </h1>
                </Section>
            </main>
        );
    }
    const relatedPosts = blogPosts.filter(
        (item) =>
            item.slug !== post.slug &&
            item.category === post.category
    );
    return (
        <main className="bg-[#050505] pt-28">
            <Section>
                <Link
                    to="/blog"
                    className="text-sm text-gray-500 hover:text-[#d4af37]"
                >
                    ← Back to Blog
                </Link>
                <article className="mx-auto mt-12 max-w-4xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                        {post.category}
                    </p>
                    <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl">
                        {post.title}
                    </h1>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="mt-12 border-t border-white/10 pt-10">
                        <p className="text-lg leading-9 text-gray-300">
                            {post.content}
                        </p>
                    </div>
                </article>
                {relatedPosts.length > 0 && (
                    <div className="mx-auto mt-20 max-w-4xl border-t border-white/10 pt-10">
                        <h2 className="text-2xl font-bold">
                            Related Articles
                        </h2>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    to={`/blog/${related.slug}`}
                                    className="rounded-2xl border border-white/10 p-5 hover:border-[#d4af37]/50"
                                >
                                    {related.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </Section>
        </main>
    );
}