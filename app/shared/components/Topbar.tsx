'use client'

import React from "react";
import Link from "next/link";

export default function Topbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            name: "Explorer",
            href: "/",
            isShown: true,
        },
        {
            name: "Services",
            href: "/#services",
            isShown: true,
        },
        {
            name: "Se connecter",
            href: "/login",
            isShown: true,
        },
        {
            name: "S'inscrire",
            href: "/register",
            isShown: true,
        },
    ];

    return (
        <nav className={'absolute w-screen top-0 p-8 flex justify-between items-center'}>
            <h1 className={'text-white font-bold text-xl'}>
                Clean area
            </h1>

            {/* Mobile navbar */}
            <div className={`flex flex-col gap-2 lg:hidden ${isMenuOpen && "active"}`} onClick={() => {
                setIsMenuOpen(!isMenuOpen)
            }}>
                <div className="h-[1px] w-6 bg-white transition-transform duration-300"></div>
                <div className="h-[1px] w-6 bg-white transition-transform duration-300"></div>
            </div>

            {/* Mobile navbar */}
            <ul
                className={`absolute top-20 z-30 w-screen h-screen bg-white transition-transform shadow-xl duration-500 right-0 py-20 px-16 flex flex-col items-start gap-6 justify-start lg:hidden ${!isMenuOpen && "-translate-y-[200%]"}`}>
                {menuItems.map((item) => (
                    item.isShown && (
                        <li key={item.name}>
                            <Link href={item.href}
                                  className={`text-gray-800 text-lg font-medium hover:text-gray-300`}>
                                {item.name}
                            </Link>
                        </li>
                    )
                ))}

            </ul>

            {/* Desktop navbar */}
            <ul className={'hidden lg:flex gap-5 items-center'}>
                {menuItems.map((item) => (
                    item.isShown && (
                        <li key={item.name}>
                            <Link href={item.href}
                                  className={`${item.href === '/register' ? 'inline-block bg-white px-6 py-2 rounded-md text-gray-950 font-medium hover:bg-gray-200 hover:text-gray-950' : 'text-white font-medium hover:text-gray-300'}`}>
                                {item.name}
                            </Link>
                        </li>
                    )
                ))}
            </ul>

        </nav>

    );
}
