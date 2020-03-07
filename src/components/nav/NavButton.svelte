<script>
  export let selected = false;
  export let link;
  export let newTab = false;

  export let prefetch = false;

  let rel;

  $: rel = [newTab ? "noopener" : "", prefetch ? "prefetch" : ""]
    .filter(x => x)
    .join("");
</script>

<style>
  /* Note: most css vars defined in Nav.svelte */

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
    border-top-width: calc(var(--button-border) / 2);
    border-bottom-width: calc(var(--button-border) / 2);

    background: var(--gel-high);
    color: black;
  }

  .button.selected:not(:first-child) a {
    border-top: 1px solid black;
  }

  .button:not(.selected):hover a {
    border-bottom-width: 1px;
    border-top-width: calc(var(--button-border) - 1px);
  }

  @media only screen and (min-width: 600px) {
    .button.selected a {
      border-top: none;
    }
  }
</style>

<div class="button" class:selected>
  <a href={link} target={newTab ? '_blank' : ''} {rel}>
    <slot />
  </a>
</div>
