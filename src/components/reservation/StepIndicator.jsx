const steps = [
    { num: 1, label: "Table" },
    { num: 2, label: "Details" },
    { num: 3, label: "Payment" },
    { num: 4, label: "Confirm" },
];

export default function StepIndicator({ currentStep }) {
    return (
        <div className="flex items-center justify-between max-w-xl mx-auto">
            {steps.map((s, idx) => {
                const isDone = currentStep > s.num;
                const isActive = currentStep === s.num;

                return (
                    <div key={s.num} className="flex items-center flex-1 last:flex-none">
                        {/* Circle + Label */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${isDone
                                        ? "bg-brand-500 text-white"
                                        : isActive
                                            ? "bg-brand-500 text-white ring-4 ring-brand-200"
                                            : "bg-white border-2 border-border text-ink-500"
                                    }`}
                            >
                                {isDone ? "✓" : s.num}
                            </div>
                            <span
                                className={`text-xs mt-2 font-medium ${isActive || isDone ? "text-brand-500" : "text-ink-500"
                                    }`}
                            >
                                {s.label}
                            </span>
                        </div>

                        {/* Connector Line */}
                        {idx < steps.length - 1 && (
                            <div className="flex-1 h-0.5 mx-3 -mt-6 bg-border relative overflow-hidden rounded">
                                <div
                                    className={`absolute inset-0 bg-brand-500 transition-all duration-500 ${currentStep > s.num ? "w-full" : "w-0"
                                        }`}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}