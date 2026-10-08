import { Link } from "react-router-dom";
import { featuredDishes } from "../../data/dishes";
import DishCard from "../ui/DishCard";
import Button from "../ui/Button";

export default function FeaturedDishes() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                            Our Menu
                        </span>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink-900 mt-3 leading-tight">
                            Signature Dishes <br />
                            <span className="text-brand-500">Made Fresh Daily</span>
                        </h2>
                        <p className="text-ink-500 mt-4 leading-relaxed">
                            Handpicked favorites from our kitchen — crafted with fresh
                            ingredients and generations of tradition.
                        </p>
                    </div>

                    <Link to="/menu" className="shrink-0">
                        <Button variant="outline" size="md">
                            View Full Menu →
                        </Button>
                    </Link>
                </div>

                {/* Dishes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredDishes.map((dish) => (
                        <DishCard key={dish.id} dish={dish} />
                    ))}
                </div>
            </div>
        </section>
    );
}