import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    sovellus: 'Cocktail Library',
    luoja: 'Jani Haakana',
  },
});

export default app;
