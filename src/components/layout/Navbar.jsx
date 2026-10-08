import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "../ui/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Left: Logo */}
                <Logo />

                {/* Center: Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLinks />
                </div>

                {/* Right: CTA + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <div className="hidden md:block">
                        <Link to="/reservation">
                            <Button variant="primary" size="md">
                                Book a Table
                            </Button>
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-brand-50 transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <span
                                className={`h-0.5 bg-ink-900 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`h-0.5 bg-ink-900 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`h-0.5 bg-ink-900 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 border-t border-border" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-4 flex flex-col gap-4 bg-white">
                    <NavLinks onClick={closeMenu} />
                    <Link to="/reservation" onClick={closeMenu}>
                        <Button variant="primary" className="w-full">
                            Book a Table
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}