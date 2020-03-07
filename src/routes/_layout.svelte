<script>
  import RandomGel from "../components/RandomGel.svelte";
  import Nav from "../components/nav/Nav.svelte";

  export let segment;
</script>

<style>
  .constrain-content {
    max-width: 60rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

<RandomGel>

  {#if segment !== 'home'}
    <Nav {segment} />
  {/if}

  <div id="main" class:constrain-content={segment !== 'home'}>
    <slot />
  </div>

</RandomGel>
