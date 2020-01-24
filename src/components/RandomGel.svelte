<script>
  let hue = Math.floor(Math.random(0) * 360);
</script>

<style>
  div {
    --gel-low: hsl(var(--hue), 20%, 50%);
    --gel-high: hsl(var(--hue), 90%, 50%);
  }
</style>

<div style="--hue:{hue}">
  <slot />
</div>
