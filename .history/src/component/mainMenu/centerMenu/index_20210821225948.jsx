import React from 'react';
import MenuPage from './MenuPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideBar from './sidebar';

const CenterMenu = ({ foods }) => {
    return (
        <div id="center-menu">
            <SideBar />
                {
                    Object.entries(foods).map(page => (
                        <MenuPage key={page[0]} page={page[1]} />
                    ))
                }
        </div >
    )
};

CenterMenu.prototype = {
    foods: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    foods: state.menu.foods
});

export default connect(mapStateToProps)(CenterMenu)

