export default function FeatureCard({ feature }) {
    const { icon, title, description } = feature;

    return (
        <div className="group bg-white rounded-2xl p-8 border border-border hover:border-brand-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 flex items-center justify-center text-3xl group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
                {icon}
            </div>
            <h3 className="font-display text-xl font-bold text-ink-900 mt-5">
                {title}
            </h3>
            <p className="text-sm text-ink-500 mt-3 leading-relaxed">
                {description}
            </p>
        </div>
    );
}