import { FireIce } from "./FireIce";

export function Logo({ withIcon = true, className = "" }: { withIcon?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-black tracking-tight ${className}`}>
      {withIcon && <FireIce size={26} className="animate-flicker" />}
      <span className="text-[1.35em] leading-none">
        <span className="text-gradient">ONE</span>
        <span className="text-white">WAY</span>
        <span className="bg-gradient-to-r from-ice to-frost bg-clip-text text-transparent">AIR</span>
      </span>
    </span>
  );
}
