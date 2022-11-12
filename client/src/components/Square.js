import React from "react";
import "./Square.css";

function Square({ mark, onClick }) {
    return (
        <div onClick={onClick} className="square">
            {mark}
        </div>
    );
}

export default Square;
