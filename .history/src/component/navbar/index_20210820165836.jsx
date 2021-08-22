import React from 'react';
import Clock from './Clock';

const Navbar = () => {

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
                <h1>You are casher staff</h1>
                <Clock />
                <div>setting</div>
            </div>
        </nav>
    )
}

export default Navbar
