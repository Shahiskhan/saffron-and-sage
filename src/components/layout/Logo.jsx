import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Home"
        >
            {/* Icon */}
            <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                S
            </div>

            {/* Text */}
            <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-lg text-ink-900 tracking-tight">
                    Saffron
                </span>
                <span className="text-[10px] text-ink-500 tracking-widest uppercase">
                    &amp; Sage
                </span>
            </div>
        </Link>
    );
}