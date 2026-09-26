import Hero from "../sections/Hero";
import TechnologyTrust from "../sections/TechnologyTrust";
import DigitalTransformation from "../sections/DigitalTransformation";
import ServicesPreview from "../sections/ServicesPreview";
import TechnologyEcosystem from "../sections/TechnologyEcosystem";
import WhyRiyadvi from "../sections/WhyRiyadvi";
import PortfolioPreview from "../sections/PortfolioPreview";
import HealthCheckupCTA from "../sections/HealthCheckupCTA";
import BlogPreview from "../sections/BlogPreview";
import FinalCTA from "../sections/FinalCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <TechnologyTrust />
            <DigitalTransformation />
            <ServicesPreview />
            <TechnologyEcosystem />
            <WhyRiyadvi />
            <PortfolioPreview />
            <HealthCheckupCTA />
            <BlogPreview />
            <FinalCTA />
        </>
    );
}