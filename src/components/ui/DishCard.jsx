export default function DishCard({ dish }) {
    const { name, description, price, image, rating, isVeg, tag } = dish;

    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Tag badge */}
                {tag && (
                    <span className="absolute top-3 left-3 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        {tag}
                    </span>
                )}

                {/* Veg/Non-veg dot */}
                <span
                    className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-sm ${isVeg ? "bg-green-500" : "bg-red-500"
                        }`}
                >
                    <span className="w-2 h-2 bg-white rounded-full" />
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-ink-900 leading-tight">
                        {name}
                    </h3>
                    <span className="font-display text-lg font-bold text-brand-500 whitespace-nowrap">
                        ₹{price}
                    </span>
                </div>

                <p className="text-sm text-ink-500 mt-2 line-clamp-2 leading-relaxed">
                    {description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-4 pt-4 border-t border-border">
                    <span className="text-brand-500 text-sm">★</span>
                    <span className="text-sm font-semibold text-ink-900">{rating}</span>
                    <span className="text-xs text-ink-500 ml-1">rating</span>
                </div>
            </div>
        </div>
    );
}