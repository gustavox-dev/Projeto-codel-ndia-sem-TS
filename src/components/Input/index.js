import React, { useState } from "react";
import './styles.css'
import useDebounce from './Debounce'
import searchIcon from '../../assets/images/search.png'

const SearchInput = ({value, onChange, children}) => {
    const [displayValue, setDisplayValue] = useState(value)
    const debouncedChange = useDebounce(onChange, 500)

    function handleChange(event) {
        setDisplayValue(event.target.value)
        debouncedChange(event.target.value)
    }

    return (
        <>
            <div className="input-item">
                <label className="searchBtn">
                    <img src={searchIcon} />
                </label>
                <input
                    className="inputSearch"
                    type="search"
                    value={displayValue}
                    onChange={handleChange}
                />
            </div>
            <div>
                {children}
            </div>
        </>
    )

}

export default SearchInput