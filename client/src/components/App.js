import React from "react";
import "./App.css";
import EvalBar from "./EvalBar";
import TicTacToe from "./TicTacToe";

export const DEFAULT_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

class App extends React.Component {
    state = {
        board: DEFAULT_BOARD,
        turn: "X",
        analysis: null,
    };

    componentDidUpdate(prevProps, prevState) {
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
        return (
            <div className="app">
                <EvalBar analysis={this.state.analysis} />
                <TicTacToe
                    board={this.state.board}
                    turn={this.state.turn}
                    setBoard={board => this.setState({ board })}
                    setTurn={turn => this.setState({ turn })}
                    analysis={this.state.analysis}
                />
            </div>
        );
    }
}

export default App;
