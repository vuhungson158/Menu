import React from 'react';
import CenterMenu from './centerMenu';
import OrderBlock from './orderBlock';

const MainMenu = () => {
    return (
        <div id="main-menu">
            <div className="container">
                <CenterMenu />
                <OrderBlock />
            </div>
        </div >
    )
}

export default MainMenu
