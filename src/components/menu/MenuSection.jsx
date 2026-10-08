import DishCard from "../ui/DishCard";

export default function MenuSection({ title, icon, dishes }) {
    return (
        <section id={title.toLowerCase().replace(/\s/g, "-")} className="py-12">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-2xl shrink-0">
                    {icon}
                </div>
                <div>
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-ink-900">
                        {title}
                    </h2>
                    <p className="text-sm text-ink-500 mt-0.5">
                        {dishes.length} {dishes.length === 1 ? "item" : "items"}
                    </p>
                </div>
                <div className="flex-1 h-px bg-border ml-4 hidden md:block" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
        </section>
    );
}