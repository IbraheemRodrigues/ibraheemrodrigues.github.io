<script>
  import CardGrid from "../components/card/CardGrid.svelte";
  import SquaresHero from "../components/squares/SquaresHero.svelte";
</script>

<style>
  #title {
    z-index: 100;

    position: absolute;
    top: calc(34vh + 100vmin / 32);
    left: calc(20vw + 100vmin / 32);

    font-size: 3vmin;
  }
</style>

<svelte:head>
  <title>Ibby</title>
</svelte:head>
<SquaresHero />

<div id="title">

  <h1>Ibraheem Rodrigues</h1>
  <h2>Programmer & Maker</h2>

</div>
