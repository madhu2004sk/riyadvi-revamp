import { Link } from "react-router-dom";

export default function Button({
    children,
    to = "/contact",
    variant = "primary",
}) {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration - 300";
   
        const styles =
        variant === "primary"
            ? "bg-[#d4af37] text-black hover:scale-105"
            : "border border-white/20 text-white hover:border-[#d4af37] hover:text-[#d4af37]";
    
        return (
        <Link to={to} className={`${base} ${styles}`}>
            {children}
        </Link>
    );
}
