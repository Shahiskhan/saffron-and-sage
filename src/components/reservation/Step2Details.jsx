import Button from "../ui/Button";

export default function Step2Details({ data, updateData, onNext, onBack }) {
    const handleNext = () => {
        if (!data.name || !data.phone || !data.email) {
            alert("Please fill name, phone, and email");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(data.email)) {
            alert("Please enter a valid email");
            return;
        }
        onNext();
    };

    return (
        <div className="space-y-7">
            <div>
                <h2 className="font-display text-2xl font-bold text-ink-900">
                    Your Details
                </h2>
                <p className="text-ink-500 text-sm mt-1">
                    We'll send your booking confirmation here.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => updateData({ name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                        Phone *
                    </label>
                    <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => updateData({ phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => updateData({ email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                        Special Requests <span className="text-ink-500 font-normal">(optional)</span>
                    </label>
                    <textarea
                        value={data.requests}
                        onChange={(e) => updateData({ requests: e.target.value })}
                        rows={3}
                        placeholder="Birthday setup, window seat, allergies..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="ghost" size="lg" onClick={onBack} className="sm:w-auto">
                    ← Back
                </Button>
                <Button variant="primary" size="lg" onClick={handleNext} className="flex-1">
                    Continue to Payment
                </Button>
            </div>
        </div>
    );
}