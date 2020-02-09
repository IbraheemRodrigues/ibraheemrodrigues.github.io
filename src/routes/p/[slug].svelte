<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`p/${params.slug}.json`);
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

  export let post;
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: black;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
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
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
  {@html post.html}
</div>

<hr />

<Disqus identifier={post.slug} />
