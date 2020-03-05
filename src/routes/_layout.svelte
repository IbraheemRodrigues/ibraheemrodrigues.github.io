<script>
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

{#if segment !== 'home'}
  <Nav {segment} />
{/if}

<div id="main" class:constrain-content={segment !== 'home'}>
  <slot />
</div>
