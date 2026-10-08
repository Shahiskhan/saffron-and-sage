import { NavLink } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservation", path: "/reservation" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export default function NavLinks({ onClick }) {
    return (
        <>
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClick}
                    className={({ isActive }) =>
                        `relative text-sm font-medium transition-colors duration-200 ${isActive
                            ? "text-brand-500"
                            : "text-ink-700 hover:text-brand-500"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <>
                            {link.name}
                            {/* Active underline */}
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-500 transition-all duration-300 ${isActive ? "w-full" : "w-0"
                                    }`}
                            />
                        </>
                    )}
                </NavLink>
            ))}
        </>
    );
}