<script>
  import RandomGel from "../RandomGel.svelte";

  export let data = {};
</script>

<style>
  .card {
    border: 1px solid var(--gel-low);
    padding: 0.5rem;

    display: grid;
    grid-template-areas: "img" "text";

    transition: border cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms;
  }

  .card:hover {
    border: 1px solid var(--gel-high);
  }
</style>

<RandomGel>
  <div class="card">

    <img src="" alt="" />

    <div class="text">{data.text}</div>
  </div>
</RandomGel>
