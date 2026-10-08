import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
            {/* Decorative blobs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-32 -right-24 w-[30rem] h-[30rem] bg-brand-300 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT: Text */}
                <div className="text-center md:text-left">
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 bg-white border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                        <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
                        Now taking reservations
                    </span>

                    {/* Heading */}
                    <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink-900 mt-6 leading-tight">
                        Authentic Flavors,{" "}
                        <span className="text-brand-500">Modern Soul.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-ink-500 text-base md:text-lg mt-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        From slow-cooked curries to hand-crafted desserts — every dish at
                        Saffron &amp; Sage is made fresh, with love, every single day.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                        <Link to="/reservation">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                Book a Table
                            </Button>
                        </Link>
                        <Link to="/menu">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                View Menu
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-6 mt-10 justify-center md:justify-start">
                        <div>
                            <p className="font-display text-2xl font-bold text-ink-900">
                                4.9★
                            </p>
                            <p className="text-xs text-ink-500">1,200+ reviews</p>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div>
                            <p className="font-display text-2xl font-bold text-ink-900">
                                15+
                            </p>
                            <p className="text-xs text-ink-500">Signature dishes</p>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div>
                            <p className="font-display text-2xl font-bold text-ink-900">
                                2015
                            </p>
                            <p className="text-xs text-ink-500">Serving since</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Images */}
                <div className="relative">
                    {/* Main image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                            alt="Restaurant interior"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating card - dish */}
                    <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white rounded-2xl shadow-xl p-3 w-40 md:w-48 border border-border">
                        <div className="rounded-xl overflow-hidden aspect-square mb-2">
                            <img
                                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80"
                                alt="Signature dish"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xs font-semibold text-ink-900">Butter Chicken</p>
                        <p className="text-[10px] text-ink-500">Chef's special</p>
                    </div>

                    {/* Floating badge - top right */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 border border-border">
                        <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-sm">
                            ★
                        </div>
                        <div>
                            <p className="text-xs font-bold text-ink-900 leading-none">
                                Top Rated
                            </p>
                            <p className="text-[10px] text-ink-500 leading-none mt-0.5">
                                in the city
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}