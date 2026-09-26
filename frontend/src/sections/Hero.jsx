import Hero3D from "../components/Hero3D";
import Button from "../components/Button";
export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden
bg-[#050505]">
            <Hero3D />
            <div className="absolute inset-0
bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_45%)]" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-8">
                <div className="max-w-3xl">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em]
text-[#d4af37]">
                        Software • Design • Digital Transformation
                    </p>
                    <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                        Transforming
                        <span className="block text-[#d4af37]">
                            Ideas Into
                        </span>
                        Digital Reality.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                        Riyadvi Software Technologies creates modern digital
                        experiences, software solutions and technology-driven
                        products that help businesses grow.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <Button to="/contact">
                            Let's Talk
                        </Button>
                        <Button
                            to="/portfolio"
                            variant="secondary"
                        >
                            Explore Our Work
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                    Scroll to explore
                </p>
            </div>
        </section>
    );
}