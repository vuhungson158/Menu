import React, { useState } from 'react';
import Clock from './Clock';

const Navbar = () => {

    const nav_height = "-60px"
    const [active, setActive] = useState(false);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = nav_height;
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <nav id="navbar">
            <div className="container">
                <h1>Menu</h1>
                <Clock />
                <div className={`setting-icon ${active ? `active` : ""}`}
                    onClick={() => setActive(!active)} >
                    <span></span>
                    <span></span>
                    <span></span>
                    {
                        active ?
                            <ul className="setting-menu">
                                <li>Language</li>
                                <li>
                                    Dark Mode
                                    <input className="switch-btn" />
                                </li>
                                <li>Size</li>
                                <li>...something</li>
                            </ul>
                            : ""
                    }
                </div>

            </div>
        </nav>
    )
}

export default Navbar
