import _ from "lodash";
import { DEFAULT_BOARD } from "../pages/MainPage";
import { Analysis, Board, Turn } from "../types/Types";
import Heading from "./Heading";
import Square from "./Square";

function flipTurn(turn: Turn) {
    return turn === "X" ? "O" : "X";
}

interface Props {
    analysis: Analysis | null;
    board: Board;
    turn: Turn;
    setBoard(board: Board): void;
    setTurn(turn: Turn): void;
    setAnalysis(analysis: Analysis | null): void;
}

function TicTacToe({ analysis, board, turn, setBoard, setTurn, setAnalysis }: Props) {
    const gameEnded = !!analysis && !analysis?.moves.length;

    const winnerText = getWinnerText();

    function onSquareClick(r: number, c: number) {
        if (board[r][c] || gameEnded) {
            return;
        }

        const boardCopy = _.cloneDeep(board);
        boardCopy[r][c] = turn;
        setBoard(boardCopy);
        setTurn(flipTurn(turn));
    }

    function renderBoard() {
        return board.map((row, r) => {
            return (
                <tr key={`row-${r}`}>
                    {row.map((square, c) => {
                        return (
                            <td key={`${r}-${c}`} className="w-32 h-32 border border-black">
                                <Square onClick={() => onSquareClick(r, c)} mark={square} />
                            </td>
                        );
                    })}
                </tr>
            );
        });
    }

    function getWinnerText(): string | undefined {
        switch (analysis?.eval) {
            case "XWins":
                return "The winner is X!";
            case "OWins":
                return "The winner is O";
            case "Draw":
                return "It's a draw!";
        }
    }

    function restart() {
        setBoard(DEFAULT_BOARD);
        setTurn("X");
        setAnalysis(null);
    }

    return (
        <div className="tic-tac-toe">
            <table className="w-96 h-96 border-collapse table-fixed">
                <tbody>{renderBoard()}</tbody>
            </table>
            {(() => {
                if (!gameEnded) {
                    return <Heading size={5} className="text-center">{`${turn}'s turn`}</Heading>;
                } else {
                    return (
                        <>
                            <Heading size={4} className="text-center">
                                {winnerText}
                            </Heading>
                            <button className="w-full h-8" onClick={restart}>
                                Restart
                            </button>
                        </>
                    );
                }
            })()}
        </div>
    );
}

export default TicTacToe;
