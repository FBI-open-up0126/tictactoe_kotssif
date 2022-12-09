<script>
    export let analysis;

    $: xEvalHeight = calculateXHeight(analysis.eval);
    $: evalText = getEvalText(analysis.eval);

    function getEvalText(evaluation) {
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

    function calculateXHeight(evaluation) {
        switch (evaluation) {
            case "XWins":
                return 300;
            case "OWins":
                return 0;
            default:
                return 150;
        }
    }
</script>

<div class="eval-bar">
    <div
        class="fill red"
        style:height={`${300 - xEvalHeight}px`}
        style:transform={`translateY(-${xEvalHeight / 2}px)`}
    />
    <p>{evalText || "?"}</p>
    <div
        class="fill blue"
        style:height={`${xEvalHeight}px`}
        style:transform={`translateY(${150 - xEvalHeight / 2}px)`}
    />
</div>

<style>
    .eval-bar {
        width: 20px;
        height: 300px;
        border: 1px solid black;
        margin: 0 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        z-index: 10;
        color: white;
        font-family: "Comic Sans MS", "Times New Roman";
        font-size: 9px;
        text-align: center;
    }

    .fill {
        width: 20px;
        height: 150px;
        position: absolute;
        transition: 1s;
    }

    .fill.red {
        background-color: red;
    }

    .fill.blue {
        background-color: blue;
    }
</style>
