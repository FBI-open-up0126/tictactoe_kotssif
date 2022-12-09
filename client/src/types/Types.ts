export type Turn = "X" | "O";
export type Square = Turn | null;

export type Row = [Square, Square, Square];
export type Board = [Row, Row, Row];

export type Move = {
    square: string;
    analysis: "Win" | "Lose" | "Draw";
    chances: {
        win: number;
        draw: number;
        lose: number;
    };
};
export type Analysis = {
    eval: "XWins" | "OWins" | "Draw";
    moves: Move[];
};
