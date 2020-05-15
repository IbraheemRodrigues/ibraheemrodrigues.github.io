<script>
  let hue = Math.floor(Math.random(0) * 360);
</script>

<style>
  div {
    /* Not designed to be overridden */
    --gel-low-i: hsla(var(--hue), 99%, 50%, 50%) !important;
    --gel-high-i: hsl(var(--hue), 90%, 50%) !important;

    --gel-low: var(--gel-low-i);
    --gel-high: var(--gel-high-i);
  }
</style>

<div style="--hue:{hue}">
  <slot />
</div>
