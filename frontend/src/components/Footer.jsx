import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#030303]">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
                {/* Company */}
                <div>
                    <h3 className="text-xl font-bold">RIYADVI</h3>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                        Riyadvi Software Technologies helps businesses build,
                        transform and scale through technology.
                    </p>
                </div>
                {/* Navigation */}
                <div>
                    <h4 className="mb-4 font-semibold">Navigation</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
                        <Link
                            to="/"
                            className="transition hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="transition hover:text-white"
                        >
                            Services
                        </Link>
                        <Link
                            to="/portfolio"
                            className="transition hover:text-white"
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/about"
                            className="transition hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            to="/blog"
                            className="transition hover:text-white"
                        >
                            Blog
                        </Link>
                        <Link
                            to="/careers"
                            className="transition hover:text-white"
                        >
                            Careers
                        </Link>
                    </div>
                </div>
                {/* CTA */}
                <div>
                    <h4 className="mb-4 font-semibold">
                        Let's build something
                    </h4>
                    <p className="text-sm leading-6 text-gray-400">
                        Have an idea, challenge or digital transformation project?
                        Let's talk.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-5 inline-block text-sm font-semibold text-[#d4af37] transition
hover:text-[#e5c158]"
                    >
                        Start a conversation →
                    </Link>
                </div>
            </div>
            {/* Copyright */}
            <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Riyadvi Software Technologies.
                All rights reserved.
            </div>
        </footer>
    );
}