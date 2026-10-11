import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionIntro from "./SectionIntro";
import { section } from "../styles";

const testimonials = [
  {
    quote:
      "Working with Onlyus Media was transformative. They customized our platform perfectly for the Indian market requirements.",
    name: "Priya Patel",
    role: "CEO, TechStart India",
  },
  {
    quote:
      "Our mobile traffic skyrocketed by 200%. The team understood our vision for a scalable e-commerce solution.",
    name: "Arjun Mehta",
    role: "Director, GrowthCorp",
  },
  {
    quote:
      "The redesigned portal is incredibly fast. User engagement has increased significantly since launch.",
    name: "Ananya Reddy",
    role: "Founder, DigitalFirst",
  },
  {
    quote:
      "Seamless integration of payments and logistics. They simplified our entire operations workflow.",
    name: "Vikram Singh",
    role: "Ops Head, Urban Retail",
  },
  {
    quote:
      "Delivered on time with exceptional quality. The code is clean and support has been outstanding.",
    name: "Neha Gupta",
    role: "Project Lead, BuildRight",
  },
  {
    quote:
      "The custom dashboard handles our data volume effortlessly. Recommended for enterprise work.",
    name: "Sneha Desai",
    role: "CTO, DataFlow Systems",
  },
  {
    quote:
      "Migration was flawless with zero downtime. Their cloud expertise is impressive.",
    name: "Meera Nair",
    role: "VP Operations, LogiFlow",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChange = (index) => {
    if (index === active || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1;
    handleChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1;
    handleChange(newIndex);
  };

  const current = testimonials[active];

  return (
    <section id="testimonials" className={`${section} bg-[#fcfdfc]`}>
      <SectionIntro
        tag="TESTIMONIALS"
        title={
          <>
            Trusted by teams
            <br />
            who build
          </>
        }
        text="Hear from the people we've partnered with to deliver real results."
      />

      <div className="reveal mx-auto max-w-[780px] px-2">
        {/* Quote + Content */}
        <div className="flex items-start gap-6 max-[650px]:gap-4">
          {/* Large Index Number */}
          <span
            className="select-none text-[100px] font-light leading-none text-foreground/8 transition-all duration-500 max-[650px]:text-[64px]"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {String(active + 1).padStart(2, "0")}
          </span>

          <div className="flex-1 pt-4 max-[650px]:pt-2">
            {/* Quote */}
            <div className="relative">
              <Quote
                size={20}
                className="absolute -left-1 -top-2 text-primary/25"
              />
              <blockquote
                className={`text-[26px] font-light leading-[1.45] tracking-tight text-foreground transition-all duration-300 max-[650px]:text-xl ${
                  isTransitioning
                    ? "translate-x-4 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                "{current.quote}"
              </blockquote>
            </div>

            {/* Author */}
            <div
              className={`mt-8 transition-all delay-100 duration-300 max-[650px]:mt-6 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-3.5">
                {/* Avatar Placeholder with Initials */}
                <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary ring-2 ring-primary/15 transition-all duration-300">
                  {current.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-foreground">
                    {current.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex items-center justify-between max-[650px]:mt-10">
          {/* Dot Indicators */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleChange(index)}
                  className="group relative py-3"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={`block h-px transition-all duration-500 ease-out ${
                      index === active
                        ? "w-10 bg-primary"
                        : "w-5 bg-foreground/15 group-hover:w-7 group-hover:bg-foreground/30"
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="text-xs tracking-[2px] text-muted-foreground">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-full p-2.5 text-foreground/35 transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full p-2.5 text-foreground/35 transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
