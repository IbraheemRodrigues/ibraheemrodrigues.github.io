<script context="module">
  export function preload({ params, query }) {
    return this.fetch("http://content.ibraheemrodrigues.com/index.json")
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import CardGrid from "../../components/card/CardGrid.svelte";
  import Card from "../../components/card/Card.svelte";

  export let posts;
</script>

<style>

</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Posts & Projects</h1>

<CardGrid>
  {#each posts as post}
    <Card data={{ text: post.meta.title, link: `/p/${post.slug}` }} />
  {/each}
</CardGrid>
