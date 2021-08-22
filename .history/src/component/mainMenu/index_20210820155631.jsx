import React from 'react';
import CenterMenu from './centerMenu';
import OrderBlock from './orderBlock';

const MainMenu = () => {
    return (
        <div id="main-menu">
            <div>
                <div>
                    <CenterMenu />
                </div>
                <div>
                    <OrderBlock />
                </div>
            </div>
        </div >
    )
}

export default MainMenu
