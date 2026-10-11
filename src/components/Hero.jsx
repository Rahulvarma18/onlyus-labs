import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import handAi from "../assets/hand-ai.webp";
import handHuman from "../assets/hand-human.webp";
import heroBg from "../assets/hero-bg.jpg";
import { btn } from "../styles";

const handBase =
  "absolute bottom-0 left-0 z-0 h-auto w-full max-w-none pointer-events-none select-none will-change-transform max-[650px]:left-1/2 max-[650px]:w-[230%]";

export default function Hero() {
  return (
    <section id="home" className="hero relative isolate min-h-[max(620px,calc(355px_+_29vw))] overflow-hidden bg-hero px-6 pt-[78px] text-center max-[900px]:pt-[76px] max-[650px]:min-h-[730px] max-[650px]:px-[18px] max-[650px]:pt-[72px]">
      <img src={heroBg} width={1586} height={992} alt="" aria-hidden="true" fetchPriority="high"
        className="absolute bottom-0 left-0 z-0 h-auto w-full max-w-none pointer-events-none select-none max-[650px]:left-1/2 max-[650px]:w-[230%] max-[650px]:-translate-x-1/2" />
      <div className={`${handBase} animate-hand-left`}>
        <img src={handAi} width={1586} height={992} alt="A robotic hand reaching toward a human hand"
          className="h-auto w-full max-[650px]:-translate-x-1/2" />
      </div>
      <div className={`${handBase} animate-hand-right`}>
        <img src={handHuman} width={1586} height={992} alt="" aria-hidden="true"
          className="h-auto w-full max-[650px]:-translate-x-1/2" />
      </div>
      <div className="relative z-[2] mx-auto max-w-[780px]">
        <h1 className="hero-title mx-auto mb-4 max-w-[760px] animate-rise text-[64px] font-bold leading-[1.08] [animation-delay:2.2s] max-[900px]:text-[54px] max-[650px]:text-[43px] max-[650px]:leading-[1.1]">
          AI Solutions That<br />Transform Businesses<span className="text-primary">.</span>
        </h1>
        <p className="hero-desc mx-auto max-w-[640px] animate-rise text-[15px] leading-[1.48] [animation-delay:2.4s] max-[650px]:max-w-[320px] max-[650px]:text-[13px]">
          We help organizations automate operations, improve customer experiences, and accelerate growth through AI Automation, AI Agents, Voice AI, Web Development, and Digital Marketing.
        </p>
        <div className="mt-[18px] flex animate-rise items-center justify-center gap-[18px] [animation-delay:2.6s] max-[650px]:mt-[17px] max-[650px]:flex-col max-[650px]:gap-[13px]">
          <a href="#contact" className={`${btn} h-[41px] rounded-[20px] bg-foreground px-[21px] text-xs text-white shadow-[0_5px_15px_#20242130] transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_9px_22px_#20242140]`}>
            Book free consultation <ArrowUpRight size={17} />
          </a>
          <a href="#services" className="inline-flex items-center gap-[9px] text-xs font-semibold hover:text-primary">
            Explore solutions <ArrowDownRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}