import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeHold } from '../../../../redux-store/actions/HoldActions';
import { holdToOrder } from '../../../../redux-store/actions/OrderActions';
import { showTime } from '../../../../pure-JS/MyTime';

const HoldItem = ({ hold, index, makeHold, holdToOrder, orders }) => {
    const [holder, setHolder] = useState(hold);

    const swrapHoldOrder = () => {
        const tempHold = {
            index,
            orders,
            totalAmount: orders.reduce((acc, order) => (acc + order.amount), 0),
            totalPrice: orders.reduce((acc, order) => (acc + order.price * order.amount), 0),
            time: showTime(),
        };
        holdToOrder(holder.orders);
        makeHold(tempHold);
        if (tempHold.totalAmount === 0) {
            setHolder({});
        } else {
            setHolder(tempHold);
        }
    }

    return (
        <tr onClick={() => swrapHoldOrder()}>
            <td>{index + 1}</td>
            <td>{holder.time}</td>
            <td>{holder.totalAmount}</td>
            <td>￥{holder.totalPrice}</td>
        </tr>
    )
}
HoldItem.prototype = {
    orders: PropTypes.array.isRequired,
    makeHold: PropTypes.func.isRequired,
    holdToOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    orders: state.order.ordered_item,
});

export default connect(mapStateToProps, { makeHold, holdToOrder })(HoldItem)
