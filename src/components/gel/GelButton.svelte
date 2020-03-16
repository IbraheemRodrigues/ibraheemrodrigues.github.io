<style>
  .gel-button {
    --button-border: 8px;

    transition: border-width 100ms ease;

    display: block;

    width: var(--button-width);
    height: calc(var(--button-height) - var(--button-border));

    border-top: 0px solid transparent;
    border-bottom: var(--button-border) solid var(--gel-high);
  }

  .gel-button:hover {
    border-top-width: calc(var(--button-border) - 1px);
    border-bottom-width: 1px;
  }
</style>

<!-- Should be parent of a flexbox -->
<div class="gel-button">
  <slot />
</div>
