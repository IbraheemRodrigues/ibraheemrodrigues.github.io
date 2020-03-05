<script>
  import { onMount, onDestroy } from "svelte";
  import squaresSketch from "./sketch";

  let hero;
  let sq;

  onMount(() => {
    sq = new p5(squaresSketch(hero), hero);
  });

  onDestroy(() => {
    // sq.remove();
  });
</script>

<style>
  #squarehero {
    width: 100%;
    height: 100%;

    overflow: hidden;
  }
</style>

<div id="squarehero" bind:this={hero} />
