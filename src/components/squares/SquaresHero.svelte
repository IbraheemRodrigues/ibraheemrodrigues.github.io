<script>
  import { onMount } from "svelte";
  import squaresSketch from "./sketch";

  let hero;

  onMount(() => {
    new p5(squaresSketch(hero), hero);
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
