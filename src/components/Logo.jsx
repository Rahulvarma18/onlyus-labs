export default function Logo({ small = false, onClick }) {
  return (
    <a href="#home" onClick={onClick} aria-label="OnlyUs Labs home"
      className={`inline-flex items-center gap-2.5 whitespace-nowrap font-extrabold ${small ? "text-[17px]" : "text-[22px] max-[900px]:text-lg"}`}>
      <span className={`grid -rotate-[18deg] place-items-center rounded-[7px] border-[3px] border-primary ${small ? "size-[23px]" : "size-7 max-[900px]:size-6"}`}>
        <span className={`rounded-[3px] bg-primary ${small ? "size-2" : "size-2.5"}`} />
      </span>
      <span>onlyus<span className="font-normal">labs</span><span className="text-primary">.</span></span>
    </a>
  );
}
