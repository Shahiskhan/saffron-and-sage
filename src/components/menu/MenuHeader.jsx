export default function MenuHeader() {
    return (
        <section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                    Our Menu
                </span>
                <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink-900 mt-3 leading-tight">
                    Crafted With <span className="text-brand-500">Love &amp; Spice</span>
                </h1>
                <p className="text-ink-500 mt-6 max-w-2xl mx-auto leading-relaxed">
                    From smoky tandoor starters to slow-cooked curries and sweet endings
                    — explore every dish we make fresh, daily.
                </p>
            </div>
        </section>
    );
}