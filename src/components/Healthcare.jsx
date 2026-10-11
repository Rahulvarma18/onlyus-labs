import { ArrowRight, ArrowUpRight, HeartPulse } from "lucide-react";
import { journey } from "../data";
import { h2, label, section } from "../styles";

export default function Healthcare() {
  return (
    <section id="healthcare" className={`${section} bg-[#f6faf8]`}>
      <div className="reveal grid grid-cols-[1fr_.75fr] items-center gap-[10%] max-[900px]:gap-[5%] max-[650px]:grid-cols-1 max-[650px]:gap-[45px]">
        <div>
          <span className={label}><span className="inline-block size-1.5 rounded-full bg-primary" /> HOSPITAL MARKETING</span>
          <h2 className={h2}>Better care deserves<br />to be found<span className="text-primary">.</span></h2>
          <p className="my-[25px] max-w-[530px] text-[15px] leading-[1.75] text-muted-foreground">
            India's AI growth partner for hospitals. We connect patient acquisition, digital marketing, AI reception, and appointment booking to help healthcare teams grow with purpose.
          </p>
          <a href="#contact" className="inline-flex items-center gap-3 border-b border-primary pb-[9px] text-[13px] font-semibold hover:text-primary">
            Talk about healthcare solutions <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="rounded-[7px] border border-border bg-background p-[27px] shadow-[0_22px_50px_#2d5a3411] max-[650px]:p-5">
          <div className="flex items-center justify-between pb-[25px] text-[9px] tracking-[1.7px] text-primary">
            <HeartPulse size={25} strokeWidth={1.4} /><span>CONNECTED PATIENT JOURNEY</span>
          </div>
          {journey.map((step, i) => (
            <div key={step} className="grid grid-cols-[45px_1fr_auto] items-center border-t border-border py-[18px] text-base">
              <span className="text-[11px] text-primary">0{i + 1}</span> {step}
              {i === journey.length - 1 ? <ArrowUpRight size={16} className="text-primary" /> : <ArrowRight size={16} className="text-primary" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
