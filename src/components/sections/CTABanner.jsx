import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function CTABanner() {
    return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 px-8 py-14 md:px-16 md:py-20 text-center">
                    {/* Decorative circles */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

                    <div className="relative">
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            Hungry? Reserve Your Table Today
                        </h2>
                        <p className="text-white/90 mt-4 max-w-xl mx-auto leading-relaxed">
                            Skip the wait. Book online in under 30 seconds and we'll have
                            your table ready the moment you arrive.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Link to="/reservation">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="!bg-white !text-brand-600 hover:!bg-brand-50 w-full sm:w-auto"
                                >
                                    Book a Table
                                </Button>
                            </Link>
                            <Link to="/menu">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="!border-white !text-white hover:!bg-white hover:!text-brand-600 w-full sm:w-auto"
                                >
                                    Browse Menu
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}