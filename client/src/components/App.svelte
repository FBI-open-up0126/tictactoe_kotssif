<script>
    import { PROXY } from "../main";
    import Board from "./Board.svelte";
    import EvalBar from "./EvalBar.svelte";

    let board = default_board();
    let turn = "X";
    let analysis = {};
    let winText = "";

    $: fetchAnalysis(board, turn).then(res => (analysis = res));
    $: gameEnded = !!analysis.moves && !analysis.moves.length;
    $: winText = getWinText(analysis.eval);

    async function fetchAnalysis(board, turn) {
        const res = await fetch(`${PROXY}/api/analysis`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                board,
                turn,
            }),
        });

        return await res.json();
    }

    function restart() {
        analysis = {};
        board = default_board();
        turn = "X";
    }

    function default_board() {
        return [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    function getWinText(evaluation) {
        switch (evaluation) {
            case "Draw":
                return "It's a draw!";
            case "XWins":
                return "The winner is X!";
            case "OWins":
                return "The winner is O!";
        }
    }
</script>

<div class="app">
    <div class="game">
        <EvalBar {analysis} />
        <Board bind:board bind:turn {gameEnded} />
    </div>

    <div class="info">
        {#if !gameEnded}
            <h3>{turn}'s turn</h3>
        {:else}
            <h2>{winText}</h2>
            <button on:click={restart}>Restart</button>
        {/if}
    </div>
</div>

<style>
    .app {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
    }

    .game {
        display: flex;
    }

    h2,
    h3 {
        text-align: center;
    }

    button {
        margin: 0 auto;
        width: 100%;
        height: 30px;
    }
</style>
