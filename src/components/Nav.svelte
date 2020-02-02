<script>
  import RandomGel from "./RandomGel.svelte";

  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid var(--gel-high);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 5px;
    background-color: var(--gel-high);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<RandomGel>
  <nav>

    <ul>
      <li>
        <a class:selected={segment === 'home'} href=".">home</a>
      </li>

      <li>
        <a rel="prefetch" class:selected={segment === 'p'} href="p">projects</a>
      </li>

      <li>
        <a
          href="https://www.youtube.com/channel/UCKe4t2irPeZfM4w_Hf7X1NA"
          target="_blank"
          rel="noopener">
          youtube
        </a>
      </li>
    </ul>

  </nav>
</RandomGel>
