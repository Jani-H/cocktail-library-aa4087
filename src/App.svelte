<script>
  import Otsikko from './Otsikko.svelte';
  import Painike from './Painike.svelte';
  import Valikko from './Valikko.svelte';
  import Footer from './Footer.svelte';
  import CocktailKortti from './CocktailKortti.svelte';
  import Haku from './Haku.svelte';
  import { cocktails } from './cocktailStore.js';

  let kirjaimet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let haku = '';

  //Funktio hakee API:sta random cocktailin ja tallentaa sen cocktailStoren taulukkoon.
  async function randomCocktail() {
    const res = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    const data = await res.json();
    cocktails.set(data.drinks);
  }

  //Funktio hakee kirjaimen mukaan API:sta cocktailit riippuen mitä kirjainta painat Valikosta ja tallentaa sen cocktailStoren taulukkoon.
  async function hae(kirjain) {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${kirjain}`
    );
    const data = await res.json();
    cocktails.set(data.drinks);
  }

  //Funktio hakee syötetyn tekstin perusteella API:sta Cocktaileja ja tallentaa ne cocktailStoren taulukkoon.
  async function haeCocktail() {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${haku}`
    );
    const data = await res.json();
    cocktails.set(data.drinks);
  }

  //Suoritetaan haeCocktail funktio jos enter:iä painetaan
  function enterHaku(event) {
    if (event.keyCode === 13) {
      haeCocktail();
    }
  }
</script>

<main>
  <Otsikko />

  <Valikko {kirjaimet} {hae} />

  <Painike class="neon-text" on:click={randomCocktail}>Random Cocktail</Painike>

  <Haku bind:haku {enterHaku} />

  <Painike class="neon-text" on:click={haeCocktail}>Search</Painike>

  <CocktailKortti {$cocktails} />

  <Footer />
</main>

<style>
  :global(:root) {
    background-color: #222222;
    background-image: url('/images/dark-brick-wall.png');
    background-repeat: repeat;
    background-size: 256px 256px;
  }
  main {
    text-align: center;
    padding-bottom: 4em;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
