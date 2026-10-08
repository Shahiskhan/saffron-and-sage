import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Step4Confirm({ data, bookingId, onReset }) {
    const paymentLabel =
        data.payment === "cash" ? "Cash on Arrival" : "Paid Online";

    const rows = [
        { label: "Booking ID", value: bookingId, highlight: true },
        { label: "Name", value: data.name },
        { label: "Phone", value: data.phone },
        { label: "Email", value: data.email },
        { label: "Date", value: data.date },
        { label: "Time", value: data.time },
        { label: "Guests", value: `${data.guests} ${data.guests === 1 ? "person" : "people"}` },
        { label: "Payment", value: paymentLabel },
    ];

    if (data.requests) {
        rows.push({ label: "Special Requests", value: data.requests });
    }

    return (
        <div className="text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-brand-50 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-brand-500 text-white text-2xl flex items-center justify-center font-bold">
                    ✓
                </div>
            </div>

            <h2 className="font-display text-3xl font-extrabold text-ink-900 mt-6">
                Reservation Confirmed!
            </h2>
            <p className="text-ink-500 mt-3 max-w-md mx-auto leading-relaxed">
                Thank you, {data.name.split(" ")[0]}! We've reserved your table. A
                confirmation has been sent to your email.
            </p>

            {/* Summary */}
            <div className="bg-brand-50 rounded-2xl p-6 mt-8 text-left border border-brand-100">
                <h3 className="font-display text-lg font-bold text-ink-900 mb-4 pb-3 border-b border-brand-200">
                    Booking Summary
                </h3>
                <div className="space-y-3">
                    {rows.map((row) => (
                        <div
                            key={row.label}
                            className="flex justify-between gap-4 text-sm"
                        >
                            <span className="text-ink-500">{row.label}</span>
                            <span
                                className={`font-semibold text-right ${row.highlight ? "text-brand-500 font-mono" : "text-ink-900"
                                    }`}
                            >
                                {row.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Info Note */}
            <div className="bg-white border border-border rounded-xl p-4 mt-6 text-sm text-ink-500 text-left">
                📌 Please arrive <strong className="text-ink-900">10 minutes early</strong>.
                Your table will be held for 15 minutes past your reservation time.
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link to="/" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                        Back to Home
                    </Button>
                </Link>
                <button onClick={onReset} className="flex-1">
                    <Button variant="primary" size="lg" className="w-full">
                        Book Another Table
                    </Button>
                </button>
            </div>
        </div>
    );
}