import React, { useState } from 'react';
import Clock from './Clock';
import Setting from './Setting';

const Navbar = () => {

    const nav_height = "-60px"
    const [isShowSetting, setShowSetting] = useState(false);

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
        <nav id="navbar" >
            <div className="container">
                <h1>Menu</h1>
                <Clock />
                <div className={`setting-icon ${isShowSetting ? `active` : ""}`}
                    onClick={() => setShowSetting(!isShowSetting)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {
                    isShowSetting ? <Setting /> : ""
                }
            </div>
        </nav >
    )
}

export default Navbar

