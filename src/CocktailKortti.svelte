<script>
  import { fade, slide } from 'svelte/transition';
  import { cocktails } from './cocktailStore.js';
  import Painike from './Painike.svelte';

  let nakyvatCocktailit = [];

  //Funktio tarkistaa onko Cocktailkortti avattu taulukosta ID:n avulla mikäli se on se poistetaan filteriä käyttäen, mikäli se ei ole auki se lisätään taulukkoon
  function toggleCocktailDetails(id) {
    if (nakyvatCocktailit.includes(id)) {
      nakyvatCocktailit = nakyvatCocktailit.filter((cid) => cid !== id);
    } else {
      nakyvatCocktailit = [...nakyvatCocktailit, id];
    }
  }

  //Funktio tarkistaa Cocktailin objektista alkoholipitoisuuden
  function checkAlcohol(i) {
    if (i === 'Alcoholic') {
      return 'Yes';
    } else {
      return 'No';
    }
  }
</script>

<!-- Tarkistetaan että haettu Cocktail kirjain löytyy cocktailStoresta, mikäli ei niin näytetään käyttäjälle virhe viesti -->
{#if Array.isArray($cocktails)}
  <div class="orderCocktail">
    <!-- Luodaan jokaisesta cocktailista kortti, annamme myös jokaiselle cocktailille ID:n jotta animaatio tapahtuu aina kun cocktailkortti vaihtuu toiseen -->
    {#each $cocktails as cocktail (cocktail.idDrink)}
      <!-- Animaatio sille kun cocktailKortti vaihtuu toiseen -->
      <div
        class="cocktailKortti"
        in:fade={{ delay: 250, duration: 500 }}
        out:fade
      >
        <div class="cocktailBox">
          <img
            class="cocktailImage"
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
          />

          <p class="nimi"><b>{cocktail.strDrink.toUpperCase()}</b></p>
          <!-- Painike näyttää cocktailin tarkemmat valmistusohjeet käyttämällä #if blockkia -->
          <Painike
            class="details-button"
            on:click={() => toggleCocktailDetails(cocktail.idDrink)}
          >
            {nakyvatCocktailit.includes(cocktail.idDrink)
              ? 'Hide Details'
              : 'Show Details'}
          </Painike>
          {#if nakyvatCocktailit.includes(cocktail.idDrink)}
            <br />
            <!-- Animaatio sille kun cocktailin tiedot tulevat esiin -->
            <div transition:slide>
              <b class="otsikko-tyyli1">Alcoholic</b>
              <p class="alcoholic">
                {checkAlcohol(cocktail.strAlcoholic)}
              </p>
              <b class="otsikko-tyyli1">Glass</b>
              <p class="glass">{cocktail.strGlass}</p>
              <p class="otsikko-tyyli1"><b>Ingredients</b></p>
              <ul class="ingredients">
                {#each Object.keys(cocktail) as ainesosa}
                  <!-- Haetaan cocktailien ainesosat joista näytetään vain ne jotka eivät ole arvoltaan null -->
                  {#if ainesosa.startsWith('strIngredient') && cocktail[ainesosa] !== null}
                    <div class="ainesosat">
                      <li>
                        <div class="ainesosaNimi">
                          {cocktail[ainesosa]}
                        </div>
                        <!-- Näytetään vain ne ainesosien määrät jotka eivät ole null -->
                        {#if cocktail['strMeasure' + ainesosa.slice(-1)] !== null}
                          <div class="measure">
                            {cocktail['strMeasure' + ainesosa.slice(-1)]}
                          </div>
                        {/if}
                      </li>
                    </div>
                  {/if}
                {/each}
              </ul>
              <p class="otsikko-tyyli1"><b>Instructions</b></p>
              <p class="instructions">{cocktail.strInstructions}</p>
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
{:else}
  <p class="virhe">
    Sorry, we dont have any cocktail recipes that begin with this letter or
    name.
  </p>
{/if}

<style>
  .orderCocktail {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
  }

  .cocktailKortti {
    background-color: transparent;
    border-color: white;
    border-style: solid;
    border-radius: 25px;
    box-shadow: 0px 0px 5px white, 0px 0px 5px white inset, 0px 0px 10px white,
      0px 0px 10px white inset;
    padding: 1em;
    margin: 1em;
    max-width: 20em;
  }

  .cocktailBox {
    background-color: white;
    border-radius: 25px;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.1em;
    box-shadow: 0px 0px 5px white, 0px 0px 10px white;
    height: auto;
  }

  .virhe {
    font-size: 1.3em;
    color: red;
    padding-bottom: 2em;
    text-shadow: 2px 2px 4px black;
  }

  .otsikko-tyyli1 {
    text-decoration: underline;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .alcoholic,
  .glass {
    text-align: center;
  }

  .ingredients {
    margin-right: 3em;
  }

  .ainesosaNimi {
    text-align: left;
    margin-left: 0em;
  }

  .measure {
    text-align: right;
  }

  .instructions {
    margin-left: 2em;
    margin-right: 2em;
    text-align: center;
  }

  .nimi {
    padding: 0.1em;
    font-size: 1.2em;
  }

  .cocktailImage {
    margin-top: 1em;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 0px;
    width: 18em;
  }
</style>
