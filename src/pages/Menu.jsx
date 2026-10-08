import { useMemo, useState } from "react";
import MenuHeader from "../components/menu/MenuHeader";
import MenuFilter from "../components/menu/MenuFilter";
import MenuSection from "../components/menu/MenuSection";
import { menuItems, categories } from "../data/dishes";

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [vegOnly, setVegOnly] = useState(false);

    // Filtered dishes
    const filtered = useMemo(() => {
        return menuItems.filter((dish) => {
            // Category filter
            if (activeCategory !== "all" && dish.category !== activeCategory) {
                return false;
            }
            // Veg only
            if (vegOnly && !dish.isVeg) return false;
            // Search
            if (
                search &&
                !dish.name.toLowerCase().includes(search.toLowerCase())
            ) {
                return false;
            }
            return true;
        });
    }, [activeCategory, search, vegOnly]);

    // Group dishes by category (sirf "all" view mein)
    const groupedByCategory = useMemo(() => {
        if (activeCategory !== "all") return null;
        return categories
            .filter((c) => c.id !== "all")
            .map((cat) => ({
                ...cat,
                dishes: filtered.filter((d) => d.category === cat.id),
            }))
            .filter((group) => group.dishes.length > 0);
    }, [filtered, activeCategory]);

    const activeCatInfo = categories.find((c) => c.id === activeCategory);

    return (
        <>
            <MenuHeader />
            <MenuFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                search={search}
                setSearch={setSearch}
                vegOnly={vegOnly}
                setVegOnly={setVegOnly}
            />

            <div className="max-w-7xl mx-auto px-6 pb-20">
                {/* Empty State */}
                {filtered.length === 0 && (
                    <div className="text-center py-24">
                        <div className="text-5xl mb-4">🍽️</div>
                        <h3 className="font-display text-2xl font-bold text-ink-900">
                            No dishes found
                        </h3>
                        <p className="text-ink-500 mt-2">
                            Try adjusting your search or filters.
                        </p>
                        <button
                            onClick={() => {
                                setSearch("");
                                setVegOnly(false);
                                setActiveCategory("all");
                            }}
                            className="text-brand-500 font-semibold mt-4 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* All view — grouped by category */}
                {groupedByCategory &&
                    groupedByCategory.map((group) => (
                        <MenuSection
                            key={group.id}
                            title={group.name}
                            icon={group.icon}
                            dishes={group.dishes}
                        />
                    ))}

                {/* Single category view */}
                {!groupedByCategory && filtered.length > 0 && (
                    <MenuSection
                        title={activeCatInfo.name}
                        icon={activeCatInfo.icon}
                        dishes={filtered}
                    />
                )}
            </div>
        </>
    );
}