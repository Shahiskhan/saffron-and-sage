import { features } from "../../data/features";
import FeatureCard from "../ui/FeatureCard";

export default function WhyChooseUs() {
    return (
        <section className="py-20 md:py-28 bg-brand-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                        Why Choose Us
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink-900 mt-3">
                        A Dining Experience <br />
                        <span className="text-brand-500">Worth Remembering</span>
                    </h2>
                    <p className="text-ink-500 mt-4 leading-relaxed">
                        Three simple promises we keep every single day — because you
                        deserve nothing less.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}