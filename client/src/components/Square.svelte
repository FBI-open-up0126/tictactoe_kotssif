<script>
    import { createEventDispatcher } from "svelte";

    export let value;

    const dispatch = createEventDispatcher();

    function click() {
        dispatch("click");
    }
</script>

<div on:click={click} on:keydown={click}>{value || ""}</div>

<style>
    div {
        width: 100%;
        height: 100%;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>
