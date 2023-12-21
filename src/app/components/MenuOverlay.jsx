import React from "react";
import NavBarLinks from "./NavBarLinks";

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            <li key={index}>
                {links.map((link, index) => (<NavBarLinks href={link.path} title={link.title}/>))}
            </li>
        </ul>
    )
}

export default MenuOverlay;