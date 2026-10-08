import { categories } from "../../data/dishes";

export default function MenuFilter({
    activeCategory,
    setActiveCategory,
    search,
    setSearch,
    vegOnly,
    setVegOnly,
}) {
    return (
        <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-4">
                {/* Row 1: Search + Veg Toggle */}
                <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-4">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500">
                            🔍
                        </span>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search dishes..."
                            className="w-full pl-11 pr-4 py-2.5 rounded-full border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition text-sm"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 hover:text-ink-900 text-lg"
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>

                    {/* Veg Only Toggle */}
                    <button
                        onClick={() => setVegOnly(!vegOnly)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all text-sm font-medium shrink-0 ${vegOnly
                                ? "bg-green-500 text-white border-green-500"
                                : "bg-white text-ink-700 border-border hover:border-green-400"
                            }`}
                    >
                        <span
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${vegOnly ? "border-white" : "border-green-500"
                                }`}
                        >
                            <span className="w-2 h-2 rounded-full bg-current" />
                        </span>
                        Veg Only
                    </button>
                </div>

                {/* Row 2: Category Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${isActive
                                        ? "bg-brand-500 text-white shadow-sm"
                                        : "bg-brand-50 text-ink-700 hover:bg-brand-100"
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                {cat.name}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}