<script>
  import NavButton from "./NavButton.svelte";

  import { onMount } from "svelte";

  import { stores } from "@sapper/app";
  const { page } = stores();

  export let segment;

  let nav;

  let open = false;

  onMount(() => {
    nav.onclick = () => {
      open = !open;
    };

    // Reset if resize and in doing so change nav menu type
    window.addEventListener("resize", () => {
      if (document.querySelector(":root").clientWidth > 700) {
        open = false;
      }
    });
  });
</script>

<style>
  :global(:root) {
    --button-height: calc(3.5rem + var(--button-border));

    --button-border: 8px;
  }

  nav {
    border-bottom: 1px solid var(--gel-high);
    font-weight: 300;
    padding: 0 1rem;

    height: var(--button-height);

    font-family: var(--theme-title-font);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: var(--theme-background);

    z-index: 200;
  }

  .clip {
    width: var(--button-height);
    height: var(--button-height);

    padding: 0.25rem;

    text-align: center;

    border-top: 0px solid transparent;
    border-bottom: var(--button-border) solid var(--gel-high);

    transition: border-width 100ms ease;
  }

  .clip:hover {
    border-bottom-width: 1px;
    border-top-width: calc(var(--button-border) - 1px);
  }

  .clip img {
    width: 100%;
    height: 3rem;
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

  @media only screen and (min-width: 700px) {
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

    .button-spacer {
      border: none;
    }
  }

  :global(body) {
    padding-top: var(--button-height);
  }

  nav.home {
    background-color: transparent;
  }
</style>

<nav bind:this={nav} class:home={$page.path === '/'}>

  <div class="clip">
    <img src="/clip.svg" alt="&#128206;" />

  </div>

  <div id="buttons" class:open>

    <NavButton link="/" selected={$page.path === '/'}>home</NavButton>

    <NavButton link="/p" prefetch selected={segment === 'p'}>
      projects
    </NavButton>

    <NavButton link="/hmm" prefetch selected={segment === 'hmm'}>
      thoughts
    </NavButton>

    <NavButton link="https://spegman.ibraheemrodrigues.com" newTab>
      spegman's guide
    </NavButton>

    <!-- All elements below will be on the right -->
    <div class="button-spacer" />

    <NavButton link="mailto:contact@ibraheemrodrigues.com" newTab>
      email
    </NavButton>

    <NavButton
      link="https://www.youtube.com/channel/UCKe4t2irPeZfM4w_Hf7X1NA"
      newTab>
      youtube
    </NavButton>

    <NavButton link="https://github.com/IbraheemR/" newTab>github</NavButton>

  </div>

</nav>
