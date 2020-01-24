<script>
  import Nav from "../components/Nav.svelte";
  import RandomGel from "../components/RandomGel.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    background-color: black;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .not-mainpage {
    max-width: 56em;
  }
</style>

{#if segment !== undefined}
  <RandomGel>
    <Nav {segment} />
  </RandomGel>
{/if}

<main class:not-mainpage={segment !== undefined}>
  <slot />
</main>
