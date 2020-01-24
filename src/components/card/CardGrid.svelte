<script>
  import Card from "./Card.svelte";

  let cards = ["hello", "bye", "spoon"];
</script>

<style>
  #cardgrid {
    display: grid;

    grid-gap: 1rem;

    grid-template-columns: 1fr 1fr 1fr;
  }
</style>

<div id="cardgrid">
  {#each cards as cardtext}
    <Card>{cardtext}</Card>
  {/each}
</div>
