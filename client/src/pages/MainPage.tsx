import React from "react";
import EvalBar from "../components/EvalBar";
import TicTacToe from "../components/TicTacToe";
import { Analysis, Board, Turn } from "../types/Types";

export const DEFAULT_BOARD: Board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

interface Props {}

interface State {
    turn: Turn;
    board: Board;
    analysis: Analysis | null;
}

class MainPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            turn: "X",
            board: DEFAULT_BOARD,
            analysis: null,
        };
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.state.board !== prevState.board) {
            this.fetchAnalysis();
        }
    }

    async fetchAnalysis() {
        const analysis = await fetch("/api/analysis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                board: this.state.board,
                turn: this.state.turn,
            }),
        });

        const json = await analysis.json();

        this.setState({ analysis: json });
    }

    componentDidMount() {
        this.fetchAnalysis();
    }

    render() {
        const { analysis, turn, board } = this.state;

        return (
            <div className="flex items-center justify-center flex-col w-screen h-screen">
                <button className="editor-button">Board Editor</button>
                <div className="flex">
                    <EvalBar analysis={analysis} />
                    <TicTacToe
                        analysis={analysis}
                        turn={turn}
                        board={board}
                        setBoard={board => this.setState({ board })}
                        setTurn={turn => this.setState({ turn })}
                        setAnalysis={analysis => this.setState({ analysis })}
                    />
                </div>
            </div>
        );
    }
}

export default MainPage;
