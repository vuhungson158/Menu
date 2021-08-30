import React, { useState } from 'react';
import { connect } from 'react-redux';
import { switchMode } from '../../redux-store/actions/ThemeActions';
import Clock from './Clock';

const Navbar = ({ theme, switchMode }) => {

    const nav_height = "-60px"
    const [active, setActive] = useState(false);
    const [isDark, setMode] = useState(theme)

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

    const onSetMode = () => {
        setMode(!isDark);
        switchMode(!isDark)
    }

    return (
        <nav id="navbar" >
            <div className="container">
                <h1>Menu</h1>
                <Clock />
                <div className={`setting-icon ${active ? `active` : ""}`}
                    onClick={() => setActive(!active)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {
                    active ?
                        <ul className="setting-menu">
                            <li className="language-menu">
                                Language
                                <ul className="language-menu">
                                    <li>VietNam</li>
                                    <li>Japan</li>
                                    <li>English</li>
                                </ul>
                            </li>
                            <li>
                                Dark Mode <input type="checkbox" className="switch-btn"
                                    checked={isDark} onClick={() => onSetMode()} />
                            </li>
                            <li>Size</li>
                            <li>...something</li>
                        </ul>
                        : ""
                }
            </div>
        </nav >
    )
}

const mapStateToProps = state => ({
    theme: state.theme.dark
});

export default connect(mapStateToProps, { switchMode })(Navbar)

