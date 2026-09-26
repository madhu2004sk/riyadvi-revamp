import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60
backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5
lg:px-8">
        <Link
            to="/"
            className="text-xl font-bold tracking-wider text-white"
            onClick={() => setMenuOpen(false)}
            >
              RIYADVI
            </Link>
                
            <div className="hidden items-center gap-7 lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                        to={item.path}
                        className="text-sm text-gray-300 transition hover:text-[#d4af37]"
                   >
                    {item.name}
                    </Link>
                    ))}

                    <Link
                        to="/contact"
                        className="rounded-full border border-[#d4af37] px-5 py-2 text-sm text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
                    >
                     Let's Talk
                    </Link>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl text-white lg:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </nav>

            {menuOpen && (
            <div className="border-t border-white/10 bg-black px-6 py-6 lg:hidden">
                    <div className="flex flex-col gap-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-300 hover:text-[#d4af37]"
                            >
                                {item.name}
                            </Link>
            ))}
                        
            <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-[#d4af37] px-5 py-3 text-center text-[#d4af37]"
            >
              Let's Talk
            </Link>
         </div>
        </div>
        )}
    </header>
    );
}