import React, { useState } from 'react';
import { connect } from 'react-redux';
import { switchMode } from '../../redux-store/actions/ThemeActions';
import Clock from './Clock';

const Navbar = ({ theme, switchMode }) => {

    const nav_height = "-60px"
    const [isShowSetting, setShowSetting] = useState(false);
    const [isShowLang, setShowLang] = useState(false);
    const [isDark, setMode] = useState(theme);
    const [activeLang, setActiveLang] = useState("en");

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

    const onClickLang = (event) => {
        const { value, name } = event.target;
        console.log({ value, name })
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
                    isShowSetting ?
                        <ul className="setting-menu">
                            <li className="language-btn" onClick={() => setShowLang(!isShowLang)} >
                                Language
                            </li>
                            {
                                isShowLang ?
                                    <div className="language-menu">
                                        <label htmlFor="en"
                                            className={activeLang === "en" ? "active" : ""}
                                        >
                                            English
                                            <input type="radio" name="language" id="en" value="en"
                                                checked={activeLang === "en"}
                                                onChange={event => onClickLang(event)}
                                            />
                                        </label>
                                        <label htmlFor="vn"
                                            className={activeLang === "vn" ? "active" : ""}
                                        >
                                            VietNam
                                            <input type="radio" name="language" id="vn" value="vn"
                                                checked={activeLang === "vn"}
                                                onChange={event => onClickLang(event)}
                                            />
                                        </label>
                                        <label htmlFor="ja"
                                            className={activeLang === "ja" ? "active" : ""}
                                        >
                                            Japan
                                            <input type="radio" name="language" id="ja" value="ja"
                                                checked={activeLang === "ja"}
                                                onChange={event => onClickLang(event)}
                                            />
                                        </label>
                                    </div>
                                    : ""
                            }
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

