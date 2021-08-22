import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchBranch } from '../../../../redux-store/actions/MenuActions';

const SideBar = ({branchs, switchBranch}) => {
    return (
        <div id="side-nav" className="side-nav">
            <ul>
                {
                    branchs.map((branch) => (
                        <li key={branch.id} className={branch.active ? "list active" : "list"} >
                            <a href="/#" onClick={() => switchBranch(branch.id)}>
                                <span className="icon"><i className={branch.icon}></i></span>
                                <span className="title">{branch.name}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

SideBar.prototype = {
    branchs: PropTypes.array.isRequired,
    switchBranch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    branchs: state.menu.branchs
});

export default connect(mapStateToProps, { switchBranch })(SideBar)
