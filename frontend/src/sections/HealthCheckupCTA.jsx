import Section from "../components/Section";
import Button from "../components/Button";
export default function HealthCheckupCTA() {
    return (
        <Section>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d4af37]/30
bg-[#0d0d0d] p-8 sm:p-12 lg:p-16">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4af37]/10
blur-3xl" />
                <div className="relative z-10 max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                        Business Health Checkup
                    </p>
                    <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                        Is your technology helping your business grow?
                    </h2>
                    <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                        Discover opportunities to improve your digital presence,
                        technology stack and customer experience.
                    </p>
                    <div className="mt-8">
                        <Button to="/health-checkup">
                            Start Health Checkup
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}