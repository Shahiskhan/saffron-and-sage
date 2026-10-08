import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialIcons from "../ui/SocialIcons";
import { contactInfo } from "../../data/contact";

export default function Footer() {
    const { restaurant, contact, hours, quickLinks, developer } = contactInfo;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-ink-900 text-ink-300 mt-20">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="lg:col-span-1">
                    <div className="text-white">
                        <Logo />
                    </div>
                    <p className="text-sm mt-5 leading-relaxed text-ink-300">
                        {restaurant.tagline}
                    </p>
                    <div className="mt-6">
                        <SocialIcons
                            github={developer.github}
                            linkedin={developer.linkedin}
                            email={developer.email}
                            phone={developer.phone}
                        />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-display font-bold text-base mb-5">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {quickLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="text-sm text-ink-300 hover:text-brand-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-px bg-brand-400 group-hover:w-4 transition-all duration-300" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-display font-bold text-base mb-5">
                        Get in Touch
                    </h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-400 mt-0.5">📍</span>
                            <span>{contact.address}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-400 mt-0.5">📞</span>
                            <a
                                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                className="hover:text-brand-400 transition-colors"
                            >
                                {contact.phone}
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-400 mt-0.5">✉️</span>
                            <a
                                href={`mailto:${contact.email}`}
                                className="hover:text-brand-400 transition-colors break-all"
                            >
                                {contact.email}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-white font-display font-bold text-base mb-5">
                        Opening Hours
                    </h4>
                    <ul className="space-y-3 text-sm">
                        {hours.map((h) => (
                            <li
                                key={h.day}
                                className="flex justify-between gap-4 border-b border-white/10 pb-2"
                            >
                                <span>{h.day}</span>
                                <span className="text-brand-400 font-medium">{h.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className="text-ink-300 text-center md:text-left">
                        © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
                    </p>

                    {/* Developer Credit */}
                    <p className="text-ink-300 text-center">
                        Designed &amp; Developed by{" "}
                        <a
                            href={developer.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white hover:text-brand-400 transition-colors"
                        >
                            {developer.name}
                        </a>
                    </p>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="text-ink-300 hover:text-brand-400 transition-colors flex items-center gap-2 group"
                        aria-label="Back to top"
                    >
                        Back to top
                        <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-brand-400 flex items-center justify-center transition-all group-hover:-translate-y-1">
                            ↑
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}