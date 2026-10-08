import { useState } from "react";
import StepIndicator from "../components/reservation/StepIndicator";
import Step1Table from "../components/reservation/Step1Table";
import Step2Details from "../components/reservation/Step2Details";
import Step3Payment from "../components/reservation/Step3Payment";
import Step4Confirm from "../components/reservation/Step4Confirm";

const INITIAL_DATA = {
    date: "",
    time: "",
    guests: 2,
    name: "",
    phone: "",
    email: "",
    requests: "",
    payment: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
};

export default function Reservation() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState(INITIAL_DATA);
    const [bookingId, setBookingId] = useState("");

    const updateData = (fields) => {
        setData((prev) => ({ ...prev, ...fields }));
    };

    const next = () => setStep((s) => Math.min(s + 1, 4));
    const back = () => setStep((s) => Math.max(s - 1, 1));

    const confirmBooking = () => {
        // Yahan baad mein API call aayegi
        const id = "SS-" + Math.floor(100000 + Math.random() * 900000);
        setBookingId(id);
        setStep(4);
    };

    const resetAll = () => {
        setStep(1);
        setData(INITIAL_DATA);
        setBookingId("");
    };

    return (
        <section className="min-h-screen bg-brand-50 py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                        Reservation
                    </span>
                    <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink-900 mt-3">
                        Book Your <span className="text-brand-500">Table</span>
                    </h1>
                    <p className="text-ink-500 mt-4 leading-relaxed">
                        Reserve in under a minute. No calls, no waiting.
                    </p>
                </div>

                {/* Step Indicator */}
                <StepIndicator currentStep={step} />

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-border p-6 md:p-10 mt-8">
                    {step === 1 && (
                        <Step1Table data={data} updateData={updateData} onNext={next} />
                    )}
                    {step === 2 && (
                        <Step2Details
                            data={data}
                            updateData={updateData}
                            onNext={next}
                            onBack={back}
                        />
                    )}
                    {step === 3 && (
                        <Step3Payment
                            data={data}
                            updateData={updateData}
                            onNext={confirmBooking}
                            onBack={back}
                        />
                    )}
                    {step === 4 && (
                        <Step4Confirm data={data} bookingId={bookingId} onReset={resetAll} />
                    )}
                </div>
            </div>
        </section>
    );
}