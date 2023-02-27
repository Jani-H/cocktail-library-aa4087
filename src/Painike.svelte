<script>
  ///Annetaan painikkeelle propsit jotta sitä voidaan muokata eri näköiseksi
  let painikeProps = {
    class: [$$restProps.class],
  };
</script>

<button on:click {...painikeProps}><slot /></button>

<style>
  button {
    color: #000000;
    background-color: rgb(199, 199, 199);
  }

  .neon-text {
    color: white;
    text-transform: uppercase;
    text-shadow: 0px 0px 5px red, 0px 0px 10px red, 0px 0px 20px red,
      0px 0px 40px red;
    font-size: 1.3em;
    font-family: 'Vibur', sans-serif;
    margin-bottom: 1.5em;
    border-radius: 25px;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  .details-button {
    padding-left: 1em;
    padding-right: 1em;
    border-style: dashed;
    background-color: transparent;
    border-radius: 25em;
    cursor: pointer;
  }
</style>
