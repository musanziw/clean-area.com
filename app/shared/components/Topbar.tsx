'use client'

import React from "react";

export default function Topbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            name: "Accueil",
            href: "/",
        },
        {
            name: "Services",
            href: "/#services",
        },
        {
            name: "A propos",
            href: "/#about",
        },
        {
            name: "Contact",
            href: "/#contact",
        }
    ];

    return (
        <>
            <h2>Navbar</h2>
        </>

    );
}
