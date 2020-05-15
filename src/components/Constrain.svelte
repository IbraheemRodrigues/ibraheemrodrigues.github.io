<script>
  export let max_width = "1000px";
</script>

<style>
  div {
    margin: 0 auto;

    padding: 0 1rem;

    font-size: 20px;
  }
</style>

<div style="max-width:{max_width}">
  <slot />
</div>
