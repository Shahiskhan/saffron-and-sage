export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md",
        outline:
            "border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white",
        ghost: "text-ink-700 hover:text-brand-500 hover:bg-brand-50",
    };

    const sizes = {
        sm: "text-sm px-4 py-2",
        md: "text-sm px-5 py-2.5",
        lg: "text-base px-7 py-3",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}