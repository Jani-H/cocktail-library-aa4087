<script>
  import Painike from './Painike.svelte';

  export let kirjaimet;
  export let hae;
</script>

<!--Valikko joka näyttä kirjaimet Array:n sisällön ja painamalla kirjainta suoritetaan haku API:sta käyttämällä valittua kirjainta-->
<div class="valikko">
  {#each kirjaimet as kirjain}
    <Painike class="neon-text" on:click={() => hae(kirjain)}>{kirjain}</Painike>
  {/each}
</div>

<style>
</style>
