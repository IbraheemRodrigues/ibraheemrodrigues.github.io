<script context="module">
  import API from "../../api";

  export async function preload({ params, query }) {
    let res = await this.fetch(`${API}/index.json`);
    if (res.status === 200) {
      let json = await res.json();
      let thoughts = json.hmm || [];

      for (let i in thoughts) {
        let res2 = await this.fetch(`${API}/${thoughts[i].data}`);
        let json2 = await res2.json();
        thoughts[i].html = json2.html;
      }

      return { posts: thoughts.filter(post => !post.meta.draft) };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Constrain from "../../components/Constrain.svelte";

  export let posts;
</script>

<svelte:head>
  <title>Thoughts</title>
</svelte:head>

<Constrain>
  <h1>Hmm...</h1>
  <!-- Sort posts in reverse date order  -->
  {#each posts.sort((a, b) => a.meta.date < b.meta.date) as post}
    <hr />

    <h2>{post.meta.title}</h2>
    {@html post.html}

    <!-- NOTE: For the moment not linking to though pages, even though they do excist. Implement this in the future -->
  {:else}
    <h2>Look at that nothing is here how odd.</h2>
  {/each}
</Constrain>
