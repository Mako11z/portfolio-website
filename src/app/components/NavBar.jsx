"use client"
import React, { useState } from "react";
import Link from "next/link";
import NavBarLinks from "./NavBarLinks";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon} from "@heroicons/react/24/solid";
import XmarkIcon from "@heroicons/react/24/solid/XmarkIcon";


const navBarLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const NavBar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex conatiner lg:py-4 flex-wrap item-center justify-between mx-auto px-4 py-2">
                <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>Logo</Link>
                <div className="mobile-menu block md:hidden">
                    {navbarOpen ? (
                        <button onClick={() => setNavBarOpen(true)} className="flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavBarOpen(false)} className="flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XmarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
                        {
                            navBarLinks.map((link, index) => (
                                <li key={index}>
                                    <NavBarLinks href={link.path} title={link.title} />
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay link={navBarLinks} /> : null}
        </nav>
    );
};

export default NavBar;