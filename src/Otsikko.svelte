<script>
  //Sivun otsikko tekstin komponentti, tyylitykset ja animoinnit
  export let sovellus = 'Cocktail Library';
</script>

<div class="otsikko">
  <h1>{sovellus}</h1>
</div>

<style>
  .otsikko {
    max-width: 35em;
    margin: 0 auto;
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
    font-family: 'Vibur', sans-serif;
    padding: 3%;
    text-shadow: 0px 0px 5px red, 0px 0px 10px red, 0px 0px 20px red,
      0px 0px 40px red;
    outline: black;
    border-radius: 10px;
    border-style: solid;
    box-shadow: 0px 0px 5px white, 0px 0px 5px white inset, 0px 0px 10px white,
      0px 0px 10px white inset;
    animation: pulsate 2.5s infinite alternate;
  }

  @keyframes pulsate {
    100% {
      /* Larger blur radius */
      text-shadow: 0 0 30px red, 0 0 33px red, 0 0 35px red, 0 0 38px red,
        0 0 40px red;
      box-shadow: 0px 0px 10px white, 0px 0px 10px white inset,
        0px 0px 11px white, 0px 0px 11px white inset;
    }
    0% {
      /* Smaller blur radius */
      text-shadow: 0 0 15px red, 0 0 18px red, 0 0 20px red, 0 0 23px red,
        0 0 25px red;
      box-shadow: 0px 0px 8px white, 0px 0px 8px white inset, 0px 0px 9px white,
        0px 0px 9px white inset;
    }
  }
</style>
