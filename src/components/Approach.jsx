import { CheckCircle2 } from "lucide-react";
import SectionIntro from "./SectionIntro";
import { industries } from "../data";
import { section } from "../styles";

const steps = [
  {
    title: "Discovery",
    description:
      "We listen first. Understanding your people, processes, and the outcomes that matter sets the foundation for everything we build.",
  },
  {
    title: "Strategy",
    description:
      "Turn the right idea into a focused plan — scoping the technology, timeline, and interface so every decision is intentional.",
  },
  {
    title: "Development",
    description:
      "We deliver the smallest reliable version quickly, with feedback loops built in so you stay close to progress.",
  },
  {
    title: "Deployment",
    description:
      "Launch with confidence. We handle integration, testing, and go-live so the transition is seamless for your team.",
  },
  {
    title: "Optimization",
    description:
      "Measure the result and strengthen what is already working — refining performance, UX, and efficiency over time.",
  },
  {
    title: "Continuous Support",
    description:
      "Your system evolves with your business. We stay alongside you with monitoring, updates, and strategic guidance.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className={`${section} bg-[#fcfdfc] !pt-[110px]`}>
      <SectionIntro
        tag="OUR APPROACH"
        title={
          <>
            From complexity
            <br />
            to clarity
          </>
        }
        text="We build intelligent systems around the challenges that matter most to you — with a clear path from first conversation to lasting impact."
      />

      {/* Orbital Timeline */}
      <div className="reveal mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        {/* Left: Headline & Description */}
        <div>
          <span className="inline-flex items-center gap-[9px] text-[10px] font-bold tracking-[2px] text-primary">
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            DELIVERY FRAMEWORK
          </span>
          <h3 className="mt-4 text-[32px] font-medium leading-[1.15] max-[650px]:text-[26px]">
            Every step mapped, every outcome earned<span className="text-primary">.</span>
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-muted-foreground">
            A clear sequence keeps strategic choices, practical implementation, and learning connected — so nothing falls between the gaps.
          </p>
        </div>

        {/* Right: Timeline Steps */}
        <ol className="relative space-y-5 border-l-2 border-primary/25 pl-9 max-[650px]:pl-7">
          {steps.map((step, index) => (
            <li
              key={step.title}
              style={{ transitionDelay: `${index * 80}ms` }}
              className="reveal relative rounded-2xl border border-border bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(242,83,33,0.08)]"
            >
              {/* Step Number Circle on Timeline */}
              <span className="absolute -left-[2.85rem] top-5 grid size-8 place-items-center rounded-full bg-primary text-sm font-bold text-white ring-4 ring-[#fcfdfc] max-[650px]:-left-[2.35rem] max-[650px]:size-7 max-[650px]:text-xs">
                {index + 1}
              </span>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-[18px] shrink-0 text-primary"
                />
                <div>
                  <h4 className="text-[17px] font-semibold leading-tight text-foreground max-[650px]:text-[15px]">
                    {step.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-[1.7] text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Industries Footer */}
      <div className="reveal mt-[50px] border-t border-border pt-7">
        <span className="text-[10px] tracking-[2px] text-muted-foreground">
          BUILT FOR AMBITIOUS TEAMS IN
        </span>
        <div className="mt-[23px] flex flex-wrap gap-x-10 gap-y-[15px] text-[17px] text-[#59605b] max-[650px]:gap-x-6 max-[650px]:gap-y-3.5 max-[650px]:text-sm">
          {industries.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
