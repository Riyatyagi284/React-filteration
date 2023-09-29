import React from 'react'
import Input from "../../components/Input"
import "../cssFiles/Category.css"

const Category = ({handleChange}) => {
    return (
        <>
            <h2 className='sidebar-title'>Category</h2>

            {/* why can't we use directly out Input Component here for this one  */}
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="test" />
                <span className='checkmark'></span> All
            </label>

            <Input handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="test" />

            <Input handleChange={handleChange}
                value="flats"
                title="Flat"
                name="test" />

            <Input handleChange={handleChange}
                value="sandals"
                title="Sandals"
                name="test" />

            <Input handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test" />
        </>
    )
}

export default Category