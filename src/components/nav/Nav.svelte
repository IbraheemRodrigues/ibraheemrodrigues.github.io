<script>
  import { onMount } from "svelte";

  import RandomGel from "../RandomGel.svelte";

  export let segment;

  let nav;

  let open = false;

  onMount(() => {
    nav.onclick = () => {
      open = !open;
    };
  });
</script>

<style>
  * {
    box-sizing: border-box;
  }

  nav {
    border-bottom: 1px solid var(--gel-high);
    font-weight: 300;
    padding: 0 1em;

    height: var(--button-height);

    --button-height: calc(3.5em + var(--button-border));

    --button-border: 8px;
  }

  .clip {
    padding: 1em;
    text-align: center;

    border-top: 0px solid transparent;
    border-bottom: var(--button-border) solid var(--gel-high);

    transition: border-width 100ms ease;
  }

  .clip:hover {
    border-bottom-width: 1px;
    border-top-width: calc(var(--button-border) - 1px);
  }

  #buttons {
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    position: fixed;

    top: var(--button-height);
    left: -90%;
    transition: left 200ms ease;

    width: 90%;
    height: calc(100% - var(--button-height));

    background: black;

    z-index: 200;

    border-right: 1px solid var(--gel-high);
  }

  #buttons.open {
    left: 0;
  }

  .button-spacer {
    flex-grow: 1;

    border-bottom: 1px solid var(--gel-high);
  }

  .button a {
    display: block;

    padding: 1em;

    line-height: 1.5;

    height: var(--button-height);

    border-top: 0px solid transparent;
    border-bottom: var(--button-border) solid var(--gel-high);

    transition: border-width 100ms ease;

    text-decoration: none;
  }

  .button.selected a {
    background: var(--gel-high);
    color: black;

    border-top: 1px solid black;
  }

  .button:not(.selected):hover a {
    border-bottom-width: 1px;
    border-top-width: calc(var(--button-border) - 1px);
  }

  @media only screen and (min-width: 600px) {
    .clip {
      display: none;
    }

    #buttons {
      flex-direction: row;

      position: static;

      width: 100%;
      height: 100%;

      border: none;

      background: none;
    }

    .button.selected a {
      border-top: none;
    }

    .button-spacer {
      border: none;
    }
  }
</style>

<RandomGel>
  <nav bind:this={nav}>

    <div class="clip">
      <img src="/clip.svg" alt="&#128206;" />

    </div>

    <div id="buttons" class:open>
      <div class="button" class:selected={segment === 'home'}>
        <a href="/">home</a>
      </div>

      <div class="button" class:selected={segment === 'p'}>
        <a rel="prefetch" href="p">projects</a>
      </div>

      <!-- All elements below will be on the right -->
      <div class="button-spacer" />

      <div class="button">
        <a href="mailto:contact@ibraheemrodrigues.com">email</a>
      </div>

      <div class="button">
        <a
          href="https://www.youtube.com/channel/UCKe4t2irPeZfM4w_Hf7X1NA"
          target="_blank"
          rel="noopener">
          youtube
        </a>
      </div>

      <div class="button">
        <a href="https://github.com/IbraheemR/" target="_blank" rel="noopener">
          github
        </a>
      </div>

    </div>

  </nav>
</RandomGel>
