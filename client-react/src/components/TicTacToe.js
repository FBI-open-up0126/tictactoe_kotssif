import _ from "lodash";
import React from "react";
import { DEFAULT_BOARD } from "./App";
import Square from "./Square";
import "./TicTacToe.css";

function flipTurn(turn) {
    return turn === "X" ? "O" : "X";
}

function TicTacToe({ analysis, board, turn, setBoard, setTurn }) {
    if (!analysis) {
        return null;
    }

    const gameEnded = !analysis.moves?.length;

    const onSquareClick = (r, c) => {
        if (board[r][c] || gameEnded) {
            return;
        }

        const boardCopy = _.cloneDeep(board);
        boardCopy[r][c] = turn;
        setBoard(boardCopy);
        setTurn(flipTurn(turn));
    };

    const renderBoard = () => {
        return board.map((row, r) => {
            return (
                <tr key={`row-${r}`}>
                    {row.map((square, c) => {
                        return (
                            <td key={`${r}-${c}`}>
                                <Square onClick={() => onSquareClick(r, c)} mark={square} />
                            </td>
                        );
                    })}
                </tr>
            );
        });
    };

    const renderWinnerText = () => {
        if (gameEnded) {
            switch (analysis.eval) {
                case "XWins":
                    return "X Won!";
                case "OWins":
                    return "O Won!";
                case "Draw":
                    return "It's a draw!";
                default:
                    return null;
            }
        }
    };

    const restart = () => {
        setBoard(DEFAULT_BOARD);
        setTurn("X");
    };

    const renderRestartButton = () => {
        if (gameEnded) {
            return (
                <button className="restart-button" onClick={restart}>
                    Restart
                </button>
            );
        }

        return null;
    };

    return (
        <div className="tic-tac-toe">
            <table>
                <tbody>{renderBoard()}</tbody>
            </table>
            <h3>{!gameEnded ? `${turn}'s turn` : null}</h3>
            <h2>{renderWinnerText()}</h2>
            {renderRestartButton()}
        </div>
    );
}

export default TicTacToe;
