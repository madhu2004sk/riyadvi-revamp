export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#030303]">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
                <div>
                    <h3 className="text-xl font-bold">RIYADVI</h3>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                        Riyadvi Software Technologies helps businesses build,
                        transform and scale through technology.
                    </p>
                </div>
                <div>
                    <h4 className="mb-4 font-semibold">Navigation</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/about">About</a>
                        <a href="/blog">Blog</a>
                        <a href="/careers">Careers</a>
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 font-semibold">Let's build something</h4>
                    <p className="text-sm leading-6 text-gray-400">
                        Have an idea, challenge or digital transformation project?
                        Let's talk.
                    </p>
                    <a
                        href="/contact"
                        className="mt-5 inline-block text-sm font-semibold text-[#d4af37]"
                    >
                        Start a conversation →
                    </a>
                </div>
            </div>
            <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Riyadvi Software Technologies. All
                rights reserved.
            </div>
        </footer>
    );
}