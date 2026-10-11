import { Plus } from "lucide-react";
import { faqs } from "../data";
import { h2, label, section } from "../styles";

export default function Faq() {
  return (
    <section id="faq" className={`${section} min-h-[550px] max-[650px]:min-h-0`}>
      <div className="grid grid-cols-2 gap-[9%] max-[650px]:grid-cols-1">
        <div className="reveal">
          <span className={label}><span className="inline-block size-1.5 rounded-full bg-primary" /> GOOD TO KNOW</span>
          <h2 className={h2}>Questions,<br />answered<span className="text-primary">.</span></h2>
          <p className="mt-[25px] text-muted-foreground">Curious about working together? Start here.</p>
        </div>
        <div className="reveal pt-[45px] max-[650px]:pt-0">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[22px] text-sm text-[#505a53] max-[650px]:text-[13px] [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <Plus size={19} className="flex-none transition-transform duration-[250ms] group-open:rotate-45 group-open:text-primary" />
              </summary>
              <p className="mb-[22px] mr-[30px] text-[13px] leading-[1.7] text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
