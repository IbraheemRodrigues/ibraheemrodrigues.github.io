<script>
  import Octicons from "@primer/octicons";

  import RandomGel from "../gel/RandomGel.svelte";
  import GelButton from "../gel/GelButton.svelte";

  export let data = {};
  let date;
  $: if (data.date) {
    date = new Date(data.date.split(" ")[0]);
  }
</script>

<style>
  .card {
    position: relative;

    height: 100%;

    border: 1px solid var(--gel-high);

    display: flex;
    flex-direction: column;

    position: relative;
    bottom: 0;
    box-shadow: 0 0 0 0 var(--gel-high);

    transition: all 100ms ease;
  }

  .card:hover {
    bottom: 0.4em;
    box-shadow: 0 0.4em 0 0 var(--gel-high);
  }

  a {
    text-decoration: none;
    color: var(--theme-text-color);

    height: calc(var(--card-height) - 1rem);
  }

  .image {
    width: 100%;
    height: 15rem;

    /* Image specified in inlin css */

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .title {
    font-family: var(--theme-title-font);

    font-size: 1.2em;

    padding: 0.2rem 0.5rem 0 0.5rem;
  }
  .description {
    padding: 0 0.5rem 0.5rem 0.5rem;
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

  .date {
    position: absolute;
    top: 0;
    right: 0;

    padding: 0.2em 0.5rem;

    color: var(--theme-background);
    font-family: var(--theme-title-font);

    background: var(--gel-low);
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

    {#if date}
      <div class="date">
        {String(date.getDate()).padStart(2, '0')}/{String(date.getMonth() + 1).padStart(2, '0')}/{date.getFullYear()}
      </div>
    {/if}

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
