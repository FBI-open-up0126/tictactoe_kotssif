<script>
    import Square from "./Square.svelte";

    export let board;
    export let turn;
    export let gameEnded;

    function flipTurn(turn) {
        return turn === "X" ? "O" : "X";
    }

    function onSquareClick(r, c) {
        if (board[r][c] || gameEnded) {
            return;
        }

        board[r][c] = turn;
        board = board;
        turn = flipTurn(turn);
    }
</script>

<div class="board">
    <table>
        <tbody>
            {#each board as row, r (r)}
                <tr>
                    {#each row as square, c (c)}
                        <td>
                            <Square value={square} on:click={() => onSquareClick(r, c)} />
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 300px;
        height: 300px;
    }

    td {
        width: 100px;
        height: 100px;
        border: 1px solid black;
        text-align: center;
        font-family: "Comic Sans MS", "Times New Roman", sans-serif;
        font-size: 70px;
        cursor: pointer;
        box-sizing: border-box;
        padding: 0;
    }

    .board {
        width: 300px;
        height: 300px;
    }
</style>
