<style>
  #cardgrid {
    display: grid;
    padding: 3rem;

    grid-gap: 1rem;

    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
</style>

<div id="cardgrid">
  <slot />
</div>
