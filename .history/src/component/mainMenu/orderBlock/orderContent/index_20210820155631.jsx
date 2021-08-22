import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrderedItem from './OrderedItem'

const OrderedContent = ({ orders }) => {

    const totalAmount = orders.reduce((acc, order) => (acc + order.amount), 0);
    const totalPrice = orders.reduce((acc, order) => (acc + order.price * order.amount), 0);

    return (
        <>
            <div id="list">
                <table>
                    {
                        orders.map((order) => (
                            <OrderedItem key={order.id} order={order} />
                        ))
                    }
                </table>
            </div>
            <div id="total">
                <div>
                    Amount:<span>{totalAmount ? totalAmount : 0}</span>
                </div>
                <div>
                    Total Price:<span>￥{totalPrice ? totalPrice : 0}</span>
                </div>
            </div>
        </>
    )
}
OrderedContent.prototype = {
    orders: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    orders: state.order.ordered_item,
    totalAmount: state.order.totalAmount,
    totalPrice: state.order.totalPrice
});

export default connect(mapStateToProps)(OrderedContent)
