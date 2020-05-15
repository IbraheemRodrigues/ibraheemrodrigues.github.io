<script context="module">
  import API from "../../api";

  export async function preload({ params, query }) {
    const res = await this.fetch(`${API}/${params.slug.join("/")}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Disqus from "../../components/Disqus.svelte";
  import Constrain from "../../components/Constrain.svelte";

  export let post;
</script>

<style>
  h1 {
    margin-top: 3rem;
  }

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
