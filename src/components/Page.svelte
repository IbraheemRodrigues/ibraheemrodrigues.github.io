<script>
  import Disqus from "./Disqus.svelte";
  import Constrain from "./Constrain.svelte";

  export let post;
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: var(--theme-background);
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .content :global(img.half-image) {
    width: 49%;
  }

  @media (max-width: 400px) {
    .content :global(img.half-image) {
      width: 100%;
    }
  }
</style>

<svelte:head>
  <title>{post.meta.title}</title>
</svelte:head>

<Constrain>
  <h1>{post.meta.title}</h1>

  <div class="content">
    {@html post.html}
  </div>

  <hr />

  <Disqus identifier={post.slug} />
</Constrain>
