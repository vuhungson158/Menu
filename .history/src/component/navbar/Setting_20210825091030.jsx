import React, { useState } from 'react'
import { connect } from 'react-redux';
import { switchMode } from '../../redux-store/actions/ThemeActions';

const Setting = ({ theme, switchMode }) => {

    const [isShowLang, setShowLang] = useState(false);
    const [isDark, setMode] = useState(theme);
    const [activeLang, setActiveLang] = useState("en");

    const onSetMode = () => {
        setMode(!isDark);
        switchMode(!isDark)
    }

    const onClickLang = (event) => {
        setActiveLang(event.target.value)
    }

    return (
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
                                onChange={event => onClickLang(event)}
                                defaultChecked
                            />
                        </label>
                        <label htmlFor="vn"
                            className={activeLang === "vn" ? "active" : ""}
                        >
                            VietNam
                            <input type="radio" name="language" id="vn" value="vn"
                                onChange={event => onClickLang(event)}
                            />
                        </label>
                        <label htmlFor="ja"
                            className={activeLang === "ja" ? "active" : ""}
                        >
                            Japan
                            <input type="radio" name="language" id="ja" value="ja"
                                onChange={event => onClickLang(event)}
                            />
                        </label>
                    </div>
                    : ""
            }
            <li>
                Dark Mode <input type="checkbox" className="switch-btn"
                    checked={isDark} onChange={() => onSetMode()} />
            </li>
            <li>Size</li>
            <li>...something</li>
        </ul>
    )
}

const mapStateToProps = state => ({
    theme: state.theme.dark
});
export default connect(mapStateToProps, { switchMode })(Setting)
