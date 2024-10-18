export default function Wordmark() {
  return (
    <div className="group flex items-center gap-[0.333em] font-bold uppercase tracking-wider">
      <span className="flex-1 text-right">manhole</span>
      <div
        className="aspect-square h-[1.666em] w-[1.666em] shrink-0 rounded-full border-[0.333em] border-current"
        aria-hidden="true"
        user-select="none"
      ></div>
      <span className="flex-1 text-left">gallery</span>
    </div>
  );
}
