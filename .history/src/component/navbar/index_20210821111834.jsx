import React, { useState } from 'react';
import Clock from './Clock';

const Navbar = () => {

    const [active, setActive] = useState(false);

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("navbar").style.top = "0";
    //     } else {
    //         document.getElementById("navbar").style.top = "-60px";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }

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
                            <ul className="setting">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                            : ""
                    }
                </div>

            </div>
        </nav>
    )
}

export default Navbar
