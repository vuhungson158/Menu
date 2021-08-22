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
            <div>
                <div>
                    <Clock />
                    <span>You are casher staff</span>
                    <div>setting</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
