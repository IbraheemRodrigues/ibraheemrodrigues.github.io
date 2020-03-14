<script>
  import RandomGel from "../components/gel/RandomGel.svelte";
  import Nav from "../components/nav/Nav.svelte";

  export let segment;
</script>

<RandomGel>

  {#if segment !== 'home'}
    <Nav {segment} />
  {/if}

  <slot />

</RandomGel>
