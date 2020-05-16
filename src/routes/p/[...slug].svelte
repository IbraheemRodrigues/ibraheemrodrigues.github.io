<script context="module">
  import API from "../../api";

  export async function preload({ params, query }) {
    const res = await this.fetch(`${API}/p/${params.slug.join("/")}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Page from "../../components/Page.svelte";

  export let post;
</script>

<Page {post} />
