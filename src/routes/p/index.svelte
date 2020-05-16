<script context="module">
  import API from "../../api";

  export async function preload({ params, query }) {
    const res = await this.fetch(`${API}/index.json`);
    const json = await res.json();
    const projects = json.p || [];

    if (res.status === 200) {
      projects.forEach(post => {
        this.fetch(post.meta.image);
      });

      return { posts: projects.filter(post => !post.meta.draft) };
    } else {
      this.error(res.status, data.message);
    }
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
      data={{ title: post.meta.title, link: `${post.meta.redirect_to || post.url}`, description: post.meta.description, date: post.meta.date, image: post.meta.image, buttons: post.meta.links }} />
  {/each}
</CardGrid>
