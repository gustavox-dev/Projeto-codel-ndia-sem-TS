import React from "react";
import './styles.css'

const SearchInput = ({value, onChange, children, onClose}) => {

    function handleChange(event) {
        onChange(event.target.value)
    }

    return (
        <>
            <input
                className="inputSearch"
                type="search"
                value={value}
                onChange={handleChange}
                onClick={onClose}
            >
            </input>
            <div>
                {children}
            </div>
        </>
    )

}

export default SearchInput