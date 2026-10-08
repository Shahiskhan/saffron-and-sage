import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                        Testimonials
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink-900 mt-3">
                        What Our Guests <span className="text-brand-500">Are Saying</span>
                    </h2>
                    <p className="text-ink-500 mt-4 leading-relaxed">
                        Real words from real people who've shared a table with us.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}