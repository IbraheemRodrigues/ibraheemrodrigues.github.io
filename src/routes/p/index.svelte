<script context="module">
  import CardGrid from "../../components/card/CardGrid.svelte";
  import Card from "../../components/card/Card.svelte";

  export function preload({ params, query }) {
    return this.fetch(`p.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
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
    <Card data={{ text: post.title, link: `${post.link}` }} />
  {/each}
</CardGrid>
