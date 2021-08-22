import React from 'react'
import MemberInfo from './MemberInfo'
import OrderedContent from './orderContent'
import Utilities from './utilities'


const OrderBlock = () => {

    return (
        <div id="order-block" className="d-flex flex-column">
            <Utilities />
            <MemberInfo />
            <OrderedContent />
            <button id="casher-btn" className="btn btn-primary">Casher</button>
        </div>
    )
}

export default OrderBlock
