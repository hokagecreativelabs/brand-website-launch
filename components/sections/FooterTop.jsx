export default function NextSection() {
  return (
    <section className="w-[1000px] h-[292px] mx-auto mt-12 p-[48px_64px] border-[8px] border-black rounded-[24px] flex flex-col items-center justify-center gap-[10px]">
      {/* Content Container */}
      <div className="w-[623px] h-[196px] flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="font-vastago font-semibold text-[48px] leading-[100%] tracking-[-4%] text-center text-black">
          Content Coming Soon
        </h2>

        {/* CTA Button */}
        <button className="w-[144px] h-[52px] rounded-[16px] bg-[#7FF41A] bg-opacity-20 flex items-center justify-center gap-[10px] p-4 font-instrument font-semibold text-[16px] leading-[145%] text-center">
          I Money Boss
          <span className="rotate-45">↗</span>
        </button>
      </div>
    </section>
  );
}
