import { useState } from "react";
import Button from "../components/ui/Button";
import { contactInfo } from "../data/contact";

export default function Contact() {
    const { contact, hours } = contactInfo;
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Yahan baad mein API call aayegi
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <>
            {/* Page Hero */}
            <section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 py-20 md:py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest">
                        Contact Us
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink-900 mt-3 leading-tight">
                        We'd Love To <span className="text-brand-500">Hear From You</span>
                    </h1>
                    <p className="text-ink-500 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Questions, feedback, or a special request? Drop us a message and
                        we'll get back within 24 hours.
                    </p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    {/* Left: Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
                                Get in Touch
                            </h2>

                            <div className="space-y-5">
                                <InfoItem icon="📍" title="Address" value={contact.address} />
                                <InfoItem
                                    icon="📞"
                                    title="Phone"
                                    value={contact.phone}
                                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                />
                                <InfoItem
                                    icon="✉️"
                                    title="Email"
                                    value={contact.email}
                                    href={`mailto:${contact.email}`}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display text-xl font-bold text-ink-900 mb-4">
                                Opening Hours
                            </h3>
                            <ul className="space-y-3">
                                {hours.map((h) => (
                                    <li
                                        key={h.day}
                                        className="flex justify-between text-sm border-b border-border pb-2"
                                    >
                                        <span className="text-ink-700">{h.day}</span>
                                        <span className="text-brand-500 font-medium">{h.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-brand-50 rounded-3xl p-8 border border-brand-100">
                        {submitted ? (
                            <div className="text-center py-16">
                                <div className="w-16 h-16 mx-auto rounded-full bg-brand-500 text-white text-3xl flex items-center justify-center">
                                    ✓
                                </div>
                                <h3 className="font-display text-2xl font-bold text-ink-900 mt-5">
                                    Message Sent!
                                </h3>
                                <p className="text-ink-500 mt-3">
                                    Thanks for reaching out. We'll get back to you soon.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-brand-500 font-semibold mt-5 hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <Button type="submit" variant="primary" size="lg" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

function InfoItem({ icon, title, value, href }) {
    const content = (
        <>
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center text-xl shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
                    {title}
                </p>
                <p className="text-ink-900 font-medium mt-1">{value}</p>
            </div>
        </>
    );

    return href ? (
        <a
            href={href}
            className="flex items-start gap-4 hover:opacity-80 transition"
        >
            {content}
        </a>
    ) : (
        <div className="flex items-start gap-4">{content}</div>
    );
}