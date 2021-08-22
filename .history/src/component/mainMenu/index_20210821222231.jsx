import React from 'react';
import CenterMenu from './centerMenu';
import OrderBlock from './orderBlock';

const MainMenu = () => {
    return (
        <div id="main-menu">
            <div className="container">
                <div className="grid">
                    <CenterMenu />
                    <OrderBlock />
                </div>
            </div>
        </div >
    )
}

export default MainMenu
