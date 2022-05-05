import React from "react";
//Style 
import "./search-bar.css"
export const SearchBar = () => {
        return (
            <>
                <div className="box">
                    <form name="search">
                        <input type="text" className="input" name="txt" 
                        onMouseOut={()=>{document.search.txt.value = ''}}/>
                    </form>
                        <i className="fas fa-search"></i>
                </div>
            </>
        );
}