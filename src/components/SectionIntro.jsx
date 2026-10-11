import { h2, label } from "../styles";

export default function SectionIntro({ tag, title, text }) {
  return (
    <div className="reveal mb-[58px] grid grid-cols-[1fr_.56fr] items-end gap-[50px] max-[900px]:grid-cols-[1fr_.8fr] max-[650px]:mb-[38px] max-[650px]:grid-cols-1 max-[650px]:gap-6">
      <div>
        <span className={label}><span className="inline-block size-1.5 rounded-full bg-primary" /> {tag}</span>
        <h2 className={h2}>{title}<span className="text-primary">.</span></h2>
      </div>
      <p className="mb-[5px] max-w-[360px] text-base leading-[1.7] text-muted-foreground max-[650px]:text-sm">{text}</p>
    </div>
  );
}
