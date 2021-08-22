import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearAll } from '../../../../redux-store/actions/OrderActions';
import HoldItem from './HoldItem';

const Utilities = ({ holds, clearAll }) => {
    const [isShowTable, setIsShowTable] = useState(false);

    return (
        <div id="utilities">
            <div id="hold" className="" onClick={() => setIsShowTable(!isShowTable)}>
                <i className="fas fa-pause-circle"></i>
                &nbsp; Hold
                {
                    isShowTable ?
                        <table id="hold-table" >
                            <thead className="">
                                <tr>
                                    <td>Index</td>
                                    <td>Time</td>
                                    <td>Amount</td>
                                    <td>Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    holds.map((hold, index) => (
                                        <HoldItem key={index} hold={hold} index={index} />
                                    ))
                                }
                            </tbody>
                        </table>
                        : ""
                }

            </div>
            <div className="" onClick={() => clearAll()}>
                <i className="fas fa-ban"></i>
                &nbsp; Cancel All Order
            </div>
        </div>
    )
}
Utilities.prototype = {
    hold: PropTypes.array.isRequired,
    clearAll: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    holds: state.hold.holder
});

export default connect(mapStateToProps, { clearAll })(Utilities)
