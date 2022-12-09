import { Analysis } from "../types/Types";
import Centered from "./Centered";
import EvalBarSeg from "./EvalBarSeg";

function calculateXHeight(evaluation: string) {
    switch (evaluation) {
        case "XWins":
            return 24;
        case "OWins":
            return 0;
        case "Draw":
            return 12;
        default:
            return 0;
    }
}

function evalText(evaluation: string) {
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

interface Props {
    analysis: Analysis | null;
}

function EvalBar({ analysis }: Props) {
    const evaluation = analysis?.eval ?? "Draw";
    const xEvalHeight = calculateXHeight(evaluation);

    return (
        <Centered className="w-8 h-96 border border-black mr-2">
            <EvalBarSeg
                className="bg-red-600"
                style={{
                    height: `${24 - xEvalHeight}rem`,
                    transform: `translateY(-${xEvalHeight / 2}rem)`,
                }}
            />
            <p className="text-white font-comic-sans z-10 text-xs text-center">
                {evalText(evaluation)}
            </p>
            <EvalBarSeg
                className="bg-blue-600"
                style={{
                    height: `${xEvalHeight}rem`,
                    transform: `translateY(${(24 - xEvalHeight) / 2}rem)`,
                }}
            />
        </Centered>
    );
}

export default EvalBar;
