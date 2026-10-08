export default function TestimonialCard({ testimonial }) {
    const { name, role, image, rating, text } = testimonial;

    return (
        <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                    <span key={i} className="text-brand-500">
                        ★
                    </span>
                ))}
            </div>

            {/* Quote */}
            <p className="text-ink-700 text-sm leading-relaxed italic flex-1">
                "{text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                <img
                    src={image}
                    alt={name}
                    className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-sm text-ink-900">{name}</p>
                    <p className="text-xs text-ink-500">{role}</p>
                </div>
            </div>
        </div>
    );
}