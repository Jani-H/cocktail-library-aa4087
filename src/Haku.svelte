<script>
  //Haku komponentti käyttää App.svelte:ssä olevaa haeCocktail ja enterHaku funktiota
  export let haku = '';

  export let enterHaku;
</script>

<div>
  <input
    bind:value={haku}
    on:keydown={enterHaku}
    placeholder="Search for Cocktails"
  />
</div>

<style>
  ::placeholder {
    text-align: center;
  }
  input {
    text-align: center;
  }
</style>
