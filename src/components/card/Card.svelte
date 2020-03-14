<script>
  import Octicons from "@primer/octicons";

  import RandomGel from "../gel/RandomGel.svelte";
  import GelButton from "../gel/GelButton.svelte";

  export let data = {};
</script>

<style>
  .card {
    position: relative;

    height: 100%;

    border: 1px solid var(--gel-high);

    display: flex;
    flex-direction: column;

    --gel-high: var(--gel-low-i);
  }

  .card:hover {
    --gel-high: var(--gel-high-i);
  }

  a {
    text-decoration: none;
    color: white;

    height: calc(var(--card-height) - 1rem);
  }

  .image {
    width: 100%;
    height: 15rem;

    grid-area: image;

    /* Image specified in inlin css */

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .title {
    grid-area: title;

    font-size: 1.2em;

    padding: 0.5rem;
  }
  .description {
    grid-area: description;

    padding: 0.5rem;
  }

  .buttons {
    --button-height: 2.5rem;

    margin-top: auto;

    display: flex;
  }

  .button a {
    padding: 0 0.5rem;
  }

  .button :global(.octicon) {
    width: 1em;
    height: 1em;

    /* shift image down to better align with text */
    position: relative;
    top: 0.1rem;
  }
</style>

<RandomGel>
  <div class="card">

    <a href={data.link}>

      <div class="image" style="background-image: url({data.image})" />

      <div class="title">{data.title || ''}</div>
      {#if data.description}
        <div class="description">{data.description}</div>
      {/if}
    </a>

    <div class="buttons">

      {#if data.buttons}
        {#each data.buttons as button}
          <div class="button">
            <GelButton>
              <a href={button.link}>
                {@html Octicons[button.icon].toSVG()}
                {button.text}
              </a>
            </GelButton>
          </div>
        {/each}
      {/if}

    </div>
  </div>
</RandomGel>
