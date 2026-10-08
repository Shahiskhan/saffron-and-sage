import Button from "../ui/Button";

const TIME_SLOTS = [
    "12:00 PM", "1:00 PM", "2:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM",
];

export default function Step1Table({ data, updateData, onNext }) {
    const today = new Date().toISOString().split("T")[0];

    const handleNext = () => {
        if (!data.date || !data.time) {
            alert("Please select date and time");
            return;
        }
        onNext();
    };

    return (
        <div className="space-y-7">
            <div>
                <h2 className="font-display text-2xl font-bold text-ink-900">
                    Select Date &amp; Time
                </h2>
                <p className="text-ink-500 text-sm mt-1">
                    Choose when you'd like to visit us.
                </p>
            </div>

            {/* Date */}
            <div>
                <label className="block text-sm font-semibold text-ink-900 mb-2">
                    Date
                </label>
                <input
                    type="date"
                    min={today}
                    value={data.date}
                    onChange={(e) => updateData({ date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                />
            </div>

            {/* Time slots */}
            <div>
                <label className="block text-sm font-semibold text-ink-900 mb-3">
                    Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((slot) => {
                        const isSelected = data.time === slot;
                        return (
                            <button
                                key={slot}
                                type="button"
                                onClick={() => updateData({ time: slot })}
                                className={`py-3 px-3 rounded-xl text-sm font-medium border transition-all duration-200 ${isSelected
                                        ? "bg-brand-500 text-white border-brand-500 shadow-sm"
                                        : "bg-white text-ink-700 border-border hover:border-brand-300 hover:bg-brand-50"
                                    }`}
                            >
                                {slot}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Guests */}
            <div>
                <label className="block text-sm font-semibold text-ink-900 mb-3">
                    Number of Guests
                </label>
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() =>
                            updateData({ guests: Math.max(1, data.guests - 1) })
                        }
                        className="w-12 h-12 rounded-full border border-border text-ink-900 text-xl font-bold hover:bg-brand-50 hover:border-brand-300 transition"
                    >
                        −
                    </button>
                    <div className="w-20 text-center">
                        <span className="font-display text-3xl font-bold text-ink-900">
                            {data.guests}
                        </span>
                        <p className="text-xs text-ink-500 mt-1">
                            {data.guests === 1 ? "guest" : "guests"}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() =>
                            updateData({ guests: Math.min(20, data.guests + 1) })
                        }
                        className="w-12 h-12 rounded-full border border-border text-ink-900 text-xl font-bold hover:bg-brand-50 hover:border-brand-300 transition"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Next */}
            <div className="pt-4">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    className="w-full"
                >
                    Continue to Details
                </Button>
            </div>
        </div>
    );
}