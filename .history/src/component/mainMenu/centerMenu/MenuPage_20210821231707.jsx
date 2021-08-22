import React from 'react'
import MenuItem from './MenuItem'

const MenuPage = ({ page }) => {
    return (
        <div className="page">
            {
                page.map((food) => (
                    <MenuItem key={food.id} food={food} />
                ))
            }
            <hr />
        </div>
    )
}

export default MenuPage
