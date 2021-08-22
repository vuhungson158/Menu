import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToOrder } from '../../../redux-store/actions/OrderActions';

const MenuItem = ({ food, addToOrder }) => {

    return (
        <div className="food-item" key={food.id} onClick={() => { addToOrder(food) }}>
            <img src={food.img} alt="" />
            <div>{food.name}</div>
            <div>￥{food.price}</div>
        </div>
    )
}

MenuItem.prototype = {
    addToOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { addToOrder })(MenuItem)

