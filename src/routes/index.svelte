<script>
  import RandomGel from "../components/gel/RandomGel.svelte";

  import Card from "../components/card/Card.svelte";
  import SquaresHero from "../components/squares/SquaresHero.svelte";

  export const segment = "home";

  const featured = [
    { title: "Hello123", slug: "test-123" },
    { title: "Hello124", slug: "test-124" },
    { title: "Hello125", slug: "test-125" },
    { title: "Hello126", slug: "test-126" }
  ];
</script>

<style>
  #title {
    z-index: 100;

    position: absolute;
    top: calc(34vh + 100vmin / 32);
    left: calc(20vw + 100vmin / 32);

    font-size: 3vmin;
  }

  #squares-hero {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: -100;
  }
</style>

<svelte:head>
  <title>Ibraheem Rodrigues | Programmer & Maker</title>
</svelte:head>

<div id="title">

  <h1>Ibraheem Rodrigues</h1>
  <h2>Programmer & Maker</h2>

</div>

<div id="squares-hero">
  <SquaresHero />
</div>

<!-- <div id="featured-projects">
  {#each featured as post}
    <Card data={post} />
  {/each}
</div> -->
