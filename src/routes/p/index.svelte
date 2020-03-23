<script context="module">
  export function preload({ params, query }) {
    return this.fetch("https://content.ibraheemrodrigues.com/index.json")
      .then(r => r.json())
      .then(posts => {
        // prefetch image thumbnails
        posts.forEach(post => {
          this.fetch(post.meta.image);
        });

        return { posts: posts.filter(post => !post.meta.draft) };
        // return { posts };
      });
  }
</script>

<script>
  import CardGrid from "../../components/card/CardGrid.svelte";
  import Card from "../../components/card/Card.svelte";

  export let posts;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<CardGrid>
  <!-- Sort posts in reverse date order  -->
  {#each posts.sort((a, b) => a.meta.date < b.meta.date) as post}
    <Card
      data={{ title: post.meta.title, link: `${post.meta.redirect_to || post.url}`, description: post.meta.description, image: post.meta.image, buttons: post.meta.links }} />
  {/each}
</CardGrid>
