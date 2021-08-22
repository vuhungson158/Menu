import React, { useState } from 'react'
import { amountDown, amountUp, changeAmount } from '../../../../redux-store/actions/OrderActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const OrderedItem = ({ order, changeAmount, amountUp, amountDown }) => {

    const total = order.price * order.amount;
    const [amount, setAmount] = useState(order.amount);
    const [showSizeBlock, setShowSizeBlock] = useState(false);

    const onMinusClick = () => {
        amountDown(order.id, order.amount)
        setAmount(amount - 1)
    }
    const onPlusClick = () => {
        amountUp(order.id)
        setAmount(amount + 1)

    }
    const onChangeAmount = (event) => {
        changeAmount(order.id, event.target.value)
        setAmount(event.target.value)

    }

    return (
        <tr>
            <td>
                <div>
                    <img className="food-img" src={order.img} alt="" />
                    <div className="food-name" onClick={() => setShowSizeBlock(!showSizeBlock)}>
                        {order.name}
                    </div>
                    {
                        showSizeBlock ?
                            <div className="food-size-block">
                                sadsa
                            </div>
                            : ""
                    }
                </div>
            </td>
            <td>
                <div>
                    <button className="minus" onClick={() => onMinusClick()}>
                        <i className="fas fa-minus-circle"></i>
                    </button>
                    <input className="amount" type="number" max="3" value={amount}
                        onChange={event => onChangeAmount(event)} />
                    <button className="plus" onClick={() => onPlusClick()}><i className="fas fa-plus-circle"></i></button>
                </div>
            </td>
            <td><div className="price">￥{total ? total : 0}</div></td>
        </tr>
    )
}

OrderedItem.prototype = {
    addToOrder: PropTypes.func.isRequired,
    amountUp: PropTypes.func.isRequired,
    amountDown: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { changeAmount, amountUp, amountDown })(OrderedItem)
