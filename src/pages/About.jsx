import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function About() {
    return (
        <>
            {/* Page Hero */}
            <section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 py-20 md:py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                        Our Story
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink-900 mt-3 leading-tight">
                        From A Small Kitchen <br />
                        <span className="text-brand-500">To Your Table</span>
                    </h1>
                    <p className="text-ink-500 mt-6 max-w-2xl mx-auto leading-relaxed">
                        It started with a recipe, a dream, and a promise — to serve food
                        the way it was meant to be served.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
                        <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                            alt="Our kitchen"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink-900 leading-tight">
                            A Family Tradition,
                            <br />
                            <span className="text-brand-500">Since 2015</span>
                        </h2>
                        <div className="space-y-4 mt-6 text-ink-500 leading-relaxed">
                            <p>
                                Saffron &amp; Sage began as a small family kitchen in Lahore,
                                where our grandmother's recipes were passed down through three
                                generations. Every spice blend, every slow-cooked curry — they
                                carry a story.
                            </p>
                            <p>
                                In 2015, we opened our doors to the public. Since then, we've
                                served over 100,000 guests, won local awards, and stayed true
                                to one principle: <strong className="text-ink-900">real food,
                                    made with real care.</strong>
                            </p>
                            <p>
                                Today, our kitchen is led by chefs who trained under masters of
                                North Indian and Mediterranean cuisine — but the soul of every
                                dish is still that first recipe.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link to="/reservation">
                                <Button variant="primary" size="lg">
                                    Visit Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-ink-900">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "10+", label: "Years Serving" },
                        { num: "100K+", label: "Happy Guests" },
                        { num: "40+", label: "Signature Dishes" },
                        { num: "4.9★", label: "Average Rating" },
                    ].map((s) => (
                        <div key={s.label}>
                            <p className="font-display text-3xl md:text-5xl font-extrabold text-brand-400">
                                {s.num}
                            </p>
                            <p className="text-ink-300 text-sm mt-2">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="py-20 md:py-24 bg-brand-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                            Our Values
                        </span>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink-900 mt-3">
                            What We <span className="text-brand-500">Stand For</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "🌾",
                                title: "Honest Ingredients",
                                text: "No artificial flavors. No shortcuts. Just food the way nature intended.",
                            },
                            {
                                icon: "❤️",
                                title: "Made With Care",
                                text: "Every dish is prepared fresh, in small batches, by people who love what they do.",
                            },
                            {
                                icon: "🌍",
                                title: "Locally Sourced",
                                text: "We partner with farms within 50km — supporting local, serving fresh.",
                            },
                        ].map((v) => (
                            <div
                                key={v.title}
                                className="bg-white rounded-2xl p-8 text-center border border-border"
                            >
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 flex items-center justify-center text-3xl">
                                    {v.icon}
                                </div>
                                <h3 className="font-display text-xl font-bold text-ink-900 mt-5">
                                    {v.title}
                                </h3>
                                <p className="text-sm text-ink-500 mt-3 leading-relaxed">
                                    {v.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}