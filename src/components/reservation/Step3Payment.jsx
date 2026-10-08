import Button from "../ui/Button";

const PAYMENT_OPTIONS = [
    {
        id: "cash",
        icon: "💵",
        title: "Cash on Arrival",
        description: "Pay when you arrive at the restaurant. No advance needed.",
    },
    {
        id: "online",
        icon: "💳",
        title: "Pay Online",
        description: "Secure your table with a card payment. Instant confirmation.",
    },
];

export default function Step3Payment({ data, updateData, onNext, onBack }) {
    const handleNext = () => {
        if (!data.payment) {
            alert("Please select a payment method");
            return;
        }
        if (data.payment === "online") {
            if (!data.cardNumber || !data.cardName || !data.expiry || !data.cvv) {
                alert("Please fill all card details");
                return;
            }
        }
        onNext();
    };

    return (
        <div className="space-y-7">
            <div>
                <h2 className="font-display text-2xl font-bold text-ink-900">
                    Payment Method
                </h2>
                <p className="text-ink-500 text-sm mt-1">
                    Choose how you'd like to pay.
                </p>
            </div>

            {/* Payment Options */}
            <div className="space-y-3">
                {PAYMENT_OPTIONS.map((opt) => {
                    const isSelected = data.payment === opt.id;
                    return (
                        <button
                            key={opt.id}
                            type="button"
                            onClick={() => updateData({ payment: opt.id })}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 ${isSelected
                                    ? "border-brand-500 bg-brand-50 shadow-sm"
                                    : "border-border bg-white hover:border-brand-300"
                                }`}
                        >
                            <div className="text-3xl">{opt.icon}</div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-semibold text-ink-900">{opt.title}</h3>
                                    {isSelected && (
                                        <span className="text-xs bg-brand-500 text-white px-2 py-0.5 rounded-full font-semibold">
                                            Selected
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-ink-500 mt-1">{opt.description}</p>
                            </div>
                            <div
                                className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center shrink-0 ${isSelected ? "border-brand-500" : "border-border"
                                    }`}
                            >
                                {isSelected && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Card Details (conditional) */}
            {data.payment === "online" && (
                <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-ink-900 mb-2">
                            Card Number
                        </label>
                        <input
                            type="text"
                            value={data.cardNumber}
                            onChange={(e) =>
                                updateData({
                                    cardNumber: e.target.value.replace(/\D/g, "").slice(0, 16),
                                })
                            }
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition font-mono"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-ink-900 mb-2">
                            Cardholder Name
                        </label>
                        <input
                            type="text"
                            value={data.cardName}
                            onChange={(e) => updateData({ cardName: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-ink-900 mb-2">
                                Expiry
                            </label>
                            <input
                                type="text"
                                value={data.expiry}
                                onChange={(e) =>
                                    updateData({
                                        expiry: e.target.value
                                            .replace(/\D/g, "")
                                            .slice(0, 4)
                                            .replace(/(\d{2})(\d{0,2})/, "$1/$2"),
                                    })
                                }
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition font-mono"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink-900 mb-2">
                                CVV
                            </label>
                            <input
                                type="text"
                                value={data.cvv}
                                onChange={(e) =>
                                    updateData({
                                        cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                                    })
                                }
                                placeholder="123"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition font-mono"
                            />
                        </div>
                    </div>

                    <p className="text-xs text-ink-500 flex items-center gap-1.5">
                        🔒 Your payment information is encrypted and secure.
                    </p>
                </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="ghost" size="lg" onClick={onBack} className="sm:w-auto">
                    ← Back
                </Button>
                <Button variant="primary" size="lg" onClick={handleNext} className="flex-1">
                    Confirm Reservation
                </Button>
            </div>
        </div>
    );
}