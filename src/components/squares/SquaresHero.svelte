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
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    overflow: hidden;
  }
</style>

<div id="squarehero" bind:this={hero} />
