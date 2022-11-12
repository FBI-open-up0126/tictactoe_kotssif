import React from "react";
import "./EvalBar.css";

function calculateXHeight(evaluation) {
    switch (evaluation) {
        case "XWins":
            return 300;
        case "OWins":
            return 0;
        case "Draw":
            return 150;
        default:
            return null;
    }
}

function evalText(evaluation) {
    switch (evaluation) {
        case "XWins":
            return "X Win";
        case "OWins":
            return "O Win";
        case "Draw":
            return "0.0";
        default:
            return null;
    }
}

function EvalBar({ analysis }) {
    if (!analysis) {
        return null;
    }

    let xEvalHeight = calculateXHeight(analysis.eval);

    return (
        <div className="eval-bar">
            <div
                className="fill red"
                style={{
                    height: `${300 - xEvalHeight}px`,
                    transform: `translateY(-${xEvalHeight / 2}px)`,
                }}
            ></div>
            <p>{evalText(analysis.eval)}</p>
            <div
                className="fill blue"
                style={{
                    height: `${xEvalHeight}px`,
                    transform: `translateY(${150 - xEvalHeight / 2}px)`,
                }}
            ></div>
        </div>
    );
}

export default EvalBar;
