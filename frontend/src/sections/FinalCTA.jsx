import Section from "../components/Section";
import Button from "../components/Button";

export default function FinalCTA() {

return (
  <Section>
     <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
         Start Something New
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold sm:text-6xl">
          Have an idea?
           <span className="block text-gray-500">
             Let's turn it into reality.
           </span>
       </h2>
       <p className="mx-auto mt-6 max-w-2xl text-gray-400">
         Tell us about your challenge, idea or digital transformation
         goal.
        </p>
     <div className="mt-8">
        <Button to="/contact">
         Let's Talk
        </Button>
     </div>
     </div>
 </Section>
 );
}